# Final Exam for Certified Server of Cannabis

## What gets built
1. **Turn on Lovable Cloud** to store codes, questions, answers and settings, and to handle the admin sign-in.
2. **/final-exam** (hidden from menus, not shown in Google)
   - Start screen: full name, email, access code. Clear messages for wrong or used codes.
   - One section at a time with a progress bar; multiple choice (4 options) and written answers with a suggested length.
   - Answers save as the student goes; coming back with the same code restores them.
   - Review screen listing unanswered questions, then the thank-you message (no score shown).
   - Optional time limit; closed-exam message when the exam is off. Phone-friendly, site fonts, colors and logo.
3. **/admin/exam** (your account only)
   - Settings: title, intro text, passing score (default 70%), time limit (off by default), open/closed.
   - Access codes: create a batch with optional names, see status (unused / in progress / submitted), copy, deactivate.
   - Questions: add, edit, reorder, delete by section; paste JSON to import many at once.
   - Submissions: name, email, date, multiple choice score, status (Needs written grading / Graded / Pass).
   - Downloads: per-answer spreadsheet (your exact columns) and a per-student summary.
   - Upload the graded spreadsheet back with written scores and feedback to record final results and Pass/Not yet.

## Security
- Answer key, model answers and rubrics never reach the student's browser; scoring happens on the server after submission.
- Students can only touch their own exam through their code; nothing else is readable.
- Limit on code attempts: a simple per-email/per-code counter (e.g. 10 tries per 15 minutes). The platform has no built-in rate limiter, so this is a custom version.

## Technical details
- Tables: exam_settings, exam_questions (public view without key fields), access_codes, exam_attempts, exam_answers, code_attempt_log, user_roles (admin role via has_role).
- Students never get direct table access; edge functions (exam-start, exam-save, exam-submit) validate the code and use the service role. Admin tables guarded by RLS with has_role(auth.uid(),'admin').
- Admin import/export CSV parsed client-side, written via admin-only RLS.
