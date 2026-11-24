create type public.app_role as enum ('admin','user');
create table public.user_roles (id uuid primary key default gen_random_uuid(), user_id uuid references auth.users(id) on delete cascade not null, role app_role not null, unique(user_id, role));
grant select on public.user_roles to authenticated; grant all on public.user_roles to service_role;
alter table public.user_roles enable row level security;
create or replace function public.has_role(_user_id uuid, _role app_role) returns boolean language sql stable security definer set search_path = public as $$ select exists(select 1 from public.user_roles where user_id=_user_id and role=_role) $$;
create policy "own roles" on public.user_roles for select to authenticated using (user_id = auth.uid());

create or replace function public.assign_exam_admin() returns trigger language plpgsql security definer set search_path = public as $$
begin
  if lower(new.email) = 'hello@cashom.org' then
    insert into public.user_roles(user_id, role) values (new.id, 'admin') on conflict do nothing;
  end if;
  return new;
end $$;
create trigger on_auth_user_exam_admin after insert on auth.users for each row execute function public.assign_exam_admin();
insert into public.user_roles(user_id, role) select id, 'admin' from auth.users where lower(email)='hello@cashom.org' on conflict do nothing;

create table public.exam_settings (id int primary key default 1 check (id = 1), title text not null default 'Certified Server of Cannabis — Final Exam', intro text not null default 'Answer every question. Your work saves as you go.', passing_score int not null default 70, time_limit_minutes int, is_open boolean not null default true, updated_at timestamptz not null default now());
insert into public.exam_settings(id) values (1);

create table public.exam_questions (id uuid primary key default gen_random_uuid(), section text not null, position int not null default 0, type text not null check (type in ('mc','written')), question text not null, options jsonb not null default '[]'::jsonb, correct_index int, model_answer text, rubric text, suggested_length text, points int not null default 1, created_at timestamptz not null default now());

create table public.access_codes (id uuid primary key default gen_random_uuid(), code text not null unique, student_name text, active boolean not null default true, created_at timestamptz not null default now());

create table public.exam_attempts (id uuid primary key default gen_random_uuid(), code_id uuid not null unique references public.access_codes(id) on delete cascade, student_name text not null, email text not null, status text not null default 'in_progress', started_at timestamptz not null default now(), submitted_at timestamptz, mc_score int, mc_possible int, written_score numeric, written_possible int, total_pct numeric, passed boolean, graded boolean not null default false);

create table public.exam_answers (id uuid primary key default gen_random_uuid(), attempt_id uuid not null references public.exam_attempts(id) on delete cascade, question_id uuid not null references public.exam_questions(id) on delete cascade, answer text, auto_score int, written_score numeric, feedback text, updated_at timestamptz not null default now(), unique(attempt_id, question_id));

create table public.exam_code_tries (id bigserial primary key, key text not null, created_at timestamptz not null default now());
create index on public.exam_code_tries(key, created_at);

do $$ declare t text; begin
  foreach t in array array['exam_settings','exam_questions','access_codes','exam_attempts','exam_answers'] loop
    execute format('grant select, insert, update, delete on public.%I to authenticated', t);
    execute format('grant all on public.%I to service_role', t);
    execute format('alter table public.%I enable row level security', t);
    execute format('create policy "admin all" on public.%I for all to authenticated using (public.has_role(auth.uid(),''admin'')) with check (public.has_role(auth.uid(),''admin''))', t);
  end loop;
end $$;
grant all on public.exam_code_tries to service_role;
grant usage, select on sequence public.exam_code_tries_id_seq to service_role;
alter table public.exam_code_tries enable row level security;