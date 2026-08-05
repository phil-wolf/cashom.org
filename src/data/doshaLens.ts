export type DoshaKey = 'vata' | 'pitta' | 'kapha';

export type PursuitKey =
  | 'creativity'
  | 'visioning'
  | 'pleasure'
  | 'working'
  | 'athletics'
  | 'therapy';

export type Alignment = 'strong' | 'moderate' | 'gentle';
export type WheelLevel = 'low' | 'medium' | 'high';
export type StateDirection = 'from_below' | 'at_target' | 'from_above';

export interface WheelBand {
  feeling: string;
  alignment: Alignment;
}

export interface Wheel {
  low: WheelBand;
  medium: WheelBand;
  high: WheelBand;
}

export interface ApplyBeat {
  beat_name: string;
  copy: string;
}

export interface StateCard {
  beat_name: string;
  chips: string[];
  guidance: string;
  land: string;
  watch: string;
}

export interface PursuitStates {
  from_below: StateCard | null;
  from_below_note?: string;
  at_target: StateCard | null;
  from_above: StateCard | null;
  from_above_note?: string;
}

export interface Pursuit {
  wheel: Wheel;
  target: WheelLevel;
  target_feeling: string;
  lens: string;
  activation_profile: string[];
  prime: string;
  apply: ApplyBeat;
  states: PursuitStates;
}

export interface Dosha {
  label: string;
  element: string;
  color: string;
  constitution_note: string;
  pursuits: Partial<Record<PursuitKey, Pursuit>>;
}

export interface TerpeneDirection {
  up: string[];
  up_note: string;
  down: string[];
  down_note: string;
  hold: string[];
  hold_note: string;
}

export interface DoshaLensMeta {
  name: string;
  version: string;
  canonical_phrase: string;
  description: string;
  session_arc: string[];
  state_logic: string;
  alignment_scale: Record<Alignment, string>;
  disclaimer: string;
}

export interface DoshaLensData {
  meta: DoshaLensMeta;
  terpene_directions: Record<DoshaKey, TerpeneDirection>;
  doshas: Record<DoshaKey, Dosha>;
}

export const doshaLens: DoshaLensData = {
  meta: {
    name: 'Dosha Lens Framework Dataset',
    version: '0.1.0',
    canonical_phrase: 'Apply your high to your pursuits in life',
    description:
      'Data model for the dosha archetype wheels, terpene state navigator, and state-conditional protocol cards. One entry per dosha-pursuit combination; each combination carries wheel data, a target state, an activation profile (the wheel’s sector label), a lens instruction, and up to three state variants for the second beat.',
    session_arc: ['prime', 'lift', 'apply', 'land'],
    state_logic:
      'The second beat branches on where the person currently is relative to the target state. from_below = activate toward the target. at_target = sustain; consume only if slipping. from_above = ground, settle, or discharge through the pursuit itself. Combinations whose target sits at the top or bottom band carry a null for the impossible direction, with a note.',
    alignment_scale: {
      strong: 'natural fit - this state fuels this pursuit directly',
      moderate: 'workable - usable with attention',
      gentle: 'needs support - a signal to rebalance rather than push',
    },
    disclaimer:
      'Terpene directions reflect traditionally associated effects drawn from preclinical research, aromatherapy tradition, and accumulated practice; individual response varies by body, dose, tolerance, and setting. This material is stewardship education, not medical advice.',
  },
  terpene_directions: {
    vata: {
      up: ['limonene', 'pinene'],
      up_note: 'Elevate gently - vata scatters easily; skip racy profiles like heavy terpinolene.',
      down: ['linalool', 'myrcene', 'beta-caryophyllene'],
      down_note: 'Ground and soften; vata settles fastest through the body.',
      hold: ['beta-caryophyllene', 'linalool'],
      hold_note: 'Anchor the state so airy energy does not drift.',
    },
    pitta: {
      up: ['limonene', 'pinene'],
      up_note: 'Brighten without adding heat - citrus-forward clarity over raw stimulation.',
      down: ['linalool', 'beta-caryophyllene', 'humulene'],
      down_note: 'Cool the fire; soothing profiles keep intensity from tipping into irritation.',
      hold: ['linalool', 'limonene'],
      hold_note: 'Keep the flame steady - enough cool to sustain, enough bright to stay sharp.',
    },
    kapha: {
      up: ['limonene', 'terpinolene', 'pinene'],
      up_note: 'Kapha needs real lift - bright, energizing profiles to break inertia.',
      down: ['myrcene'],
      down_note: 'Rarely needed; a light touch only, or heaviness compounds.',
      hold: ['beta-caryophyllene', 'limonene'],
      hold_note: 'A little brightness inside the anchor keeps steadiness from becoming stagnation.',
    },
  },
  doshas: {
    vata: {
      label: 'Vata',
      element: 'air and ether',
      color: '#7F77DD',
      constitution_note:
        "Moves fast, lifts easily, drifts easily. The steward's recurring jobs: anchor before elevating, capture before it evaporates, land before the crash.",
      pursuits: {
        creativity: {
          wheel: {
            low: { feeling: 'dreamy', alignment: 'moderate' },
            medium: { feeling: 'playful', alignment: 'strong' },
            high: { feeling: 'inspired', alignment: 'strong' },
          },
          target: 'high',
          target_feeling: 'inspired',
          lens: 'make, compose, riff',
          activation_profile: ['limonene', 'pinene'],
          prime:
            'Grounding anchors before any consumption: warm tea, food nearby, materials laid out so inspiration has somewhere to land.',
          apply: {
            beat_name: 'Create',
            copy: 'Make, compose, riff. Protect a 30-90 minute window; no re-dosing inside it - the elevation is not the experience, the work is.',
          },
          states: {
            from_below: {
              beat_name: 'Lift',
              chips: ['limonene', 'pinene'],
              guidance:
                'Low-temp citrus-pine vapor, one gentle draw - or a 2-3mg fast-onset beverage, sipped. A true 15-20 minute observation pause, then reassess. Consume to arrive, then stop.',
              land: 'Caryophyllene-rich landing option, warmth, grounding food. Capture loose threads on paper so the air element releases them.',
              watch: 'Inspired tipping into frenetic or scattered - pause, ground, hydrate.',
            },
            at_target: {
              beat_name: 'Sustain',
              chips: ['none needed'],
              guidance:
                'The window is already open - consume nothing and start making. Only if the state slips back toward dreamy, a trace draw of the activation profile.',
              land: 'Standard close: capture, warmth, food. Note what opened the window without help - that is data worth keeping.',
              watch: 'Consuming out of habit rather than need - the steward protects the state, not the ritual.',
            },
            from_above: null,
            from_above_note:
              'High is the target ceiling for this pursuit; overshoot within the band is handled by the watch signal.',
          },
        },
        visioning: {
          wheel: {
            low: { feeling: 'wistful', alignment: 'moderate' },
            medium: { feeling: 'curious', alignment: 'strong' },
            high: { feeling: 'expansive', alignment: 'strong' },
          },
          target: 'high',
          target_feeling: 'expansive',
          lens: 'imagine, plan, dream forward',
          activation_profile: ['limonene', 'pinene'],
          prime: 'Journal or vision materials ready, open space or a view, phone away.',
          apply: {
            beat_name: 'Envision',
            copy: 'Imagine, plan, dream forward. Capture everything as it comes - vata visions evaporate.',
          },
          states: {
            from_below: {
              beat_name: 'Lift',
              chips: ['limonene', 'pinene'],
              guidance:
                'Gentle elevation: one draw or a sipped low-dose citrus beverage, then a full observation pause before any more.',
              land: 'Grounding profile on hand; translate the vision into three written commitments before closing.',
              watch: 'Expansive drifting into ungrounded fantasy - return to paper.',
            },
            at_target: {
              beat_name: 'Sustain',
              chips: ['none needed'],
              guidance: 'Already expansive - go straight to the page. Nothing further unless the state visibly thins.',
              land: 'Same close: three written commitments, then ground.',
              watch: 'Vision-hopping - many futures sketched, none held long enough to matter.',
            },
            from_above: null,
            from_above_note:
              'High is the target ceiling for this pursuit; overshoot within the band is handled by the watch signal.',
          },
        },
        pleasure: {
          wheel: {
            low: { feeling: 'restless', alignment: 'gentle' },
            medium: { feeling: 'delighted', alignment: 'strong' },
            high: { feeling: 'euphoric', alignment: 'moderate' },
          },
          target: 'medium',
          target_feeling: 'delighted',
          lens: 'savor, taste, enjoy',
          activation_profile: ['limonene', 'linalool'],
          prime: 'Curate the sensory field in advance: music, textures, taste elements staged.',
          apply: {
            beat_name: 'Savor',
            copy: 'Savor, taste, enjoy. Slow everything to half speed.',
          },
          states: {
            from_below: {
              beat_name: 'Lift',
              chips: ['limonene', 'linalool'],
              guidance: 'Around 2mg in beverage form, sipped slowly - the ritual is the pacing.',
              land: 'Warmth and softness; end the session before the delight does.',
              watch: 'Delighted racing toward euphoric-then-restless - no second round.',
            },
            at_target: {
              beat_name: 'Sustain',
              chips: ['none needed'],
              guidance: 'Delight is present - add nothing and deepen attention instead. A trace only if restlessness creeps back.',
              land: 'Gentle close in comfort; keep the evening soft.',
              watch: 'Attention wandering off the senses and into the head - return to taste, texture, sound.',
            },
            from_above: {
              beat_name: 'Ground',
              chips: ['linalool', 'beta-caryophyllene'],
              guidance:
                'No further THC; shift to a linalool-forward calming element - warm drink, soft light - and let the peak settle into delight.',
              land: 'Extended comfort; euphoric peaks in vata drop fast, so pad the descent.',
              watch: 'Euphoria masking restlessness underneath - stillness, warmth, no stimulation.',
            },
          },
        },
        working: {
          wheel: {
            low: { feeling: 'foggy', alignment: 'gentle' },
            medium: { feeling: 'inventive', alignment: 'strong' },
            high: { feeling: 'frenetic', alignment: 'gentle' },
          },
          target: 'medium',
          target_feeling: 'inventive',
          lens: 'build, execute, complete',
          activation_profile: ['pinene', 'beta-caryophyllene'],
          prime: 'Task chosen and materials open before consuming - never decide what to do while lifted.',
          apply: {
            beat_name: 'Build',
            copy: 'Build, execute, complete. One task only; park side-ideas on a capture list.',
          },
          states: {
            from_below: {
              beat_name: 'Lift',
              chips: ['pinene', 'beta-caryophyllene'],
              guidance: 'Minimal pinene-forward dose with a caryophyllene anchor; one draw, assess at 15 minutes.',
              land: 'Close loops on paper, then step away fully.',
              watch: 'Inventive fragmenting into frenetic multitasking - single-task or stop.',
            },
            at_target: {
              beat_name: 'Sustain',
              chips: ['none needed'],
              guidance: 'Momentum exists - ride it clean. Nothing unless focus visibly frays, then a trace anchor-forward draw.',
              land: 'Stop at a natural seam and write down the next first step.',
              watch: 'Consuming to extend a session that should simply end.',
            },
            from_above: {
              beat_name: 'Ground',
              chips: ['beta-caryophyllene', 'linalool'],
              guidance:
                'No elevation; a grounding-forward micro-dose or none at all. Narrow the field: one task, timer on, everything else closed.',
              land: 'Hard stop at the timer; frenetic sessions overrun and produce debris.',
              watch: 'Output volume masquerading as progress - check the work, not the speed.',
            },
          },
        },
        athletics: {
          wheel: {
            low: { feeling: 'depleted', alignment: 'gentle' },
            medium: { feeling: 'light', alignment: 'moderate' },
            high: { feeling: 'electric', alignment: 'moderate' },
          },
          target: 'medium',
          target_feeling: 'light',
          lens: 'move, train, play',
          activation_profile: ['pinene', 'limonene'],
          prime:
            'Hydrate and warm up before any consumption decision - the warmup is diagnostic; notice where the energy actually is.',
          apply: {
            beat_name: 'Move',
            copy: 'Move, train, play. Rhythmic, flowing formats over max-effort - vata sustains through cadence, not intensity.',
          },
          states: {
            from_below: {
              beat_name: 'Lift',
              chips: ['pinene', 'limonene'],
              guidance:
                'One small draw after the warmup, not before - movement first, lift second. Reassess at 15 minutes; the goal is light, not electric.',
              land: 'Stretch, eat, rehydrate - vata burns through reserves invisibly.',
              watch: 'Light turning electric mid-session - stop consuming, taper intensity.',
            },
            at_target: {
              beat_name: 'Sustain',
              chips: ['none needed'],
              guidance:
                'The session is already fueled - consume nothing. Only if the state visibly slips toward heavy or foggy, a trace pinene-forward draw.',
              land: 'Standard close; note what produced this state without help.',
              watch: 'Reaching for consumption out of habit rather than need - the steward protects the state, not the ritual.',
            },
            from_above: {
              beat_name: 'Discharge',
              chips: ['abstain', 'linalool at landing'],
              guidance:
                'No consumption - the electricity is the fuel. Channel it directly into rhythmic movement and let the activity itself burn off the excess. Elevating profiles here push into overstimulation.',
              land: 'Where the session is won or lost: linalool or caryophyllene-forward landing profile, substantial food, warmth, early wind-down. The crash risk peaks after electric sessions.',
              watch: 'Electric masking depletion - hard stop at the first sign of shakiness, spaciness, or form breaking down.',
            },
          },
        },
        therapy: {
          wheel: {
            low: { feeling: 'tender', alignment: 'strong' },
            medium: { feeling: 'open', alignment: 'moderate' },
            high: { feeling: 'scattered', alignment: 'gentle' },
          },
          target: 'low',
          target_feeling: 'tender',
          lens: 'process, soften, integrate',
          activation_profile: ['linalool', 'beta-caryophyllene'],
          prime: 'Safe container set: support person or prompts, blanket-level comfort, no time pressure.',
          apply: {
            beat_name: 'Process',
            copy: 'Process, soften, integrate. Follow the body, not the story.',
          },
          states: {
            from_below: null,
            from_below_note: 'Low is the floor; there is no arriving from below for this pursuit.',
            at_target: {
              beat_name: 'Sustain',
              chips: ['none needed'],
              guidance: 'Tenderness is already accessible - begin without consuming. The container does the work.',
              land: 'Stay in comfort: warmth, weight, quiet. Close gently and early.',
              watch: 'Tender sliding toward overwhelm - pause, breathe, feet on floor.',
            },
            from_above: {
              beat_name: 'Ground',
              chips: ['linalool', 'beta-caryophyllene'],
              guidance:
                'Grounding micro-dose only; the profile does the work, not the quantity. Let energy settle before opening anything deep.',
              land: 'No re-dosing at any point; close gently and early, staying in comfort.',
              watch: 'Open scattering into overwhelm - stop the inquiry, return to the senses.',
            },
          },
        },
      },
    },
    pitta: {
      label: 'Pitta',
      element: 'fire and water',
      color: '#D85A30',
      constitution_note:
        "Runs hot, focuses hard, overruns easily. The steward's recurring jobs: cool before it curdles, define done before starting, protect rest after intensity.",
      pursuits: {
        working: {
          wheel: {
            low: { feeling: 'impatient', alignment: 'gentle' },
            medium: { feeling: 'focused', alignment: 'strong' },
            high: { feeling: 'driven', alignment: 'strong' },
          },
          target: 'medium',
          target_feeling: 'focused',
          lens: 'build, execute, complete',
          activation_profile: ['limonene', 'pinene'],
          prime: 'Define done before starting - pitta will otherwise expand the scope mid-session.',
          apply: {
            beat_name: 'Build',
            copy: 'Build, execute, complete. Precision over volume; stop at done.',
          },
          states: {
            from_below: {
              beat_name: 'Lift',
              chips: ['limonene', 'pinene'],
              guidance: 'Bright, citrus-forward clarity at a low dose - enough to cut the friction, not enough to add heat.',
              land: 'Step away at done, not at exhausted. Cool close: water, air, no screens.',
              watch: 'Focused hardening into driven - check whether the intensity is serving the task or the ego.',
            },
            at_target: {
              beat_name: 'Sustain',
              chips: ['linalool trace if edge appears'],
              guidance: 'Focus is present - nothing needed. If an edge creeps in, a trace linalool-forward element to cool without dulling.',
              land: 'Stop at done. Cool close as always.',
              watch: 'The definition of done quietly expanding mid-session.',
            },
            from_above: {
              beat_name: 'Ground',
              chips: ['linalool', 'beta-caryophyllene'],
              guidance:
                'Cool before continuing: no elevation, a soothing-forward micro-dose or none, and a deliberate pace reduction. Driven feels productive and burns the whole day.',
              land: 'Mandatory decompression - pitta carries work heat into everything that follows.',
              watch: 'Driven tipping into irritable at any interruption - that is the signal, not the interruption.',
            },
          },
        },
        athletics: {
          wheel: {
            low: { feeling: 'frustrated', alignment: 'gentle' },
            medium: { feeling: 'competitive', alignment: 'strong' },
            high: { feeling: 'fierce', alignment: 'strong' },
          },
          target: 'high',
          target_feeling: 'fierce',
          lens: 'move, train, play',
          activation_profile: ['limonene', 'pinene'],
          prime: 'Warm up fully and set the intensity ceiling in advance - pitta negotiates ceilings upward mid-session.',
          apply: {
            beat_name: 'Compete',
            copy: 'Move, train, play at full expression. Fierce is clean intensity - competitive fire with form intact.',
          },
          states: {
            from_below: {
              beat_name: 'Lift',
              chips: ['limonene', 'pinene'],
              guidance: 'Bright activation at a low dose before or early in the session; let the effort itself do most of the lifting.',
              land: 'Cool-down is non-negotiable: linalool-forward landing, cold water, genuine rest.',
              watch: 'Fierce curdling into reckless - form breakdown means stop, not push.',
            },
            at_target: {
              beat_name: 'Sustain',
              chips: ['none needed'],
              guidance: 'The fire is lit - add nothing. Fuel with effort and hydration only.',
              land: 'Full cool-down, cold water, rest. The session ends when recovery begins, not before.',
              watch: 'Competing against the body instead of with it - pain signals are data, not challenges.',
            },
            from_above: null,
            from_above_note:
              'High is the target ceiling for this pursuit; overshoot within the band is handled by the watch signal.',
          },
        },
        visioning: {
          wheel: {
            low: { feeling: 'cynical', alignment: 'gentle' },
            medium: { feeling: 'strategic', alignment: 'strong' },
            high: { feeling: 'ambitious', alignment: 'strong' },
          },
          target: 'high',
          target_feeling: 'ambitious',
          lens: 'imagine, plan, dream forward',
          activation_profile: ['limonene', 'pinene'],
          prime: 'Frame the question before elevating - pitta visioning without a question becomes empire-building.',
          apply: {
            beat_name: 'Envision',
            copy: 'Imagine, plan, dream forward. Let ambition size the vision; strategy comes after, cooled.',
          },
          states: {
            from_below: {
              beat_name: 'Lift',
              chips: ['limonene', 'pinene'],
              guidance:
                'Citrus-bright elevation at a low dose; cynicism in pitta is usually depleted fire, so lift gently and re-ask the original question.',
              land: 'Write the vision, then cool completely before evaluating it - hot pitta ships premature plans.',
              watch: 'Ambitious inflating into grandiose - test the vision against the original question.',
            },
            at_target: {
              beat_name: 'Sustain',
              chips: ['none needed'],
              guidance: 'Ambition is online - point it at the question and write. Nothing further needed.',
              land: 'Capture, then cool before committing resources to anything.',
              watch: 'The vision growing to justify the feeling rather than the feeling serving the vision.',
            },
            from_above: null,
            from_above_note:
              'High is the target ceiling for this pursuit; overshoot within the band is handled by the watch signal.',
          },
        },
        creativity: {
          wheel: {
            low: { feeling: 'critical', alignment: 'gentle' },
            medium: { feeling: 'precise', alignment: 'strong' },
            high: { feeling: 'bold', alignment: 'moderate' },
          },
          target: 'medium',
          target_feeling: 'precise',
          lens: 'make, compose, riff',
          activation_profile: ['limonene', 'pinene'],
          prime: 'Materials sharp and staged; pitta creativity runs on craft, so honor the setup.',
          apply: {
            beat_name: 'Craft',
            copy: 'Make, compose, refine. Precision is the pitta gift - let the work be exact.',
          },
          states: {
            from_below: {
              beat_name: 'Lift',
              chips: ['limonene', 'pinene'],
              guidance:
                'Low-dose brightening to soften the critical edge into discernment; pause and reassess before any more.',
              land: 'Stop at a natural seam; assess tomorrow, not tonight.',
              watch: 'Precise narrowing back into critical - the inner editor arriving before the maker is done.',
            },
            at_target: {
              beat_name: 'Sustain',
              chips: ['linalool trace if edge appears'],
              guidance: 'Precision is flowing - protect it. A cooling trace only if the edge sharpens toward judgment.',
              land: 'Stop at the seam; review with fresh eyes later.',
              watch: 'Refining past the point of improvement - polishing as avoidance of finishing.',
            },
            from_above: {
              beat_name: 'Ground',
              chips: ['linalool', 'beta-caryophyllene'],
              guidance: 'Cool the boldness slightly rather than kill it - a soothing trace, slower hands, smaller strokes.',
              land: 'Cool close; evaluate the bold moves after the heat is gone.',
              watch: 'Bold overriding craft - big gestures hiding loose execution.',
            },
          },
        },
        pleasure: {
          wheel: {
            low: { feeling: 'irritable', alignment: 'gentle' },
            medium: { feeling: 'savoring', alignment: 'strong' },
            high: { feeling: 'intense', alignment: 'moderate' },
          },
          target: 'medium',
          target_feeling: 'savoring',
          lens: 'savor, taste, enjoy',
          activation_profile: ['limonene', 'linalool'],
          prime: 'Remove the schedule; pitta pleasure fails under a clock.',
          apply: {
            beat_name: 'Savor',
            copy: 'Savor, taste, enjoy. Half speed, full attention - pleasure is the one pursuit pitta cannot win.',
          },
          states: {
            from_below: {
              beat_name: 'Lift',
              chips: ['limonene', 'linalool'],
              guidance:
                'Light, cooling brightness at a low dose; irritation is heat, so pair with literal cooling - shade, water, cool food.',
              land: 'Extend the ease past the session; no evaluating the experience afterward.',
              watch: 'Savoring turning into critiquing - the sommelier reflex eating the enjoyment.',
            },
            at_target: {
              beat_name: 'Sustain',
              chips: ['none needed'],
              guidance: 'Savoring is happening - add nothing, slow down further, and stay with one sense at a time.',
              land: 'Let the session trail off naturally; resist the urge to cap it with an assessment.',
              watch: 'Comparing this experience to a better remembered one - presence lost to ranking.',
            },
            from_above: {
              beat_name: 'Ground',
              chips: ['linalool', 'humulene'],
              guidance: 'No more THC; cool and slow with a soothing-forward element until intensity settles into savoring.',
              land: 'Pad the descent with comfort and cool air.',
              watch: 'Intensity chasing a bigger peak - more is the opposite of the point here.',
            },
          },
        },
        therapy: {
          wheel: {
            low: { feeling: 'cooling', alignment: 'strong' },
            medium: { feeling: 'honest', alignment: 'moderate' },
            high: { feeling: 'defensive', alignment: 'gentle' },
          },
          target: 'low',
          target_feeling: 'cooling',
          lens: 'process, soften, integrate',
          activation_profile: ['linalool', 'beta-caryophyllene', 'humulene'],
          prime: 'Set honesty as the frame and safety as the floor; pitta opens through truth, not comfort.',
          apply: {
            beat_name: 'Process',
            copy: 'Process, soften, integrate. Let the heat speak without acting on it.',
          },
          states: {
            from_below: null,
            from_below_note: 'Low is the floor; there is no arriving from below for this pursuit.',
            at_target: {
              beat_name: 'Sustain',
              chips: ['none needed'],
              guidance: 'The cooled state is the work state - begin without consuming.',
              land: 'Close with genuine kindness toward self - pitta debriefs itself brutally.',
              watch: 'Coolness hardening into detachment - feeling nothing is not the same as processing.',
            },
            from_above: {
              beat_name: 'Ground',
              chips: ['linalool', 'beta-caryophyllene', 'humulene'],
              guidance:
                'Cooling-forward micro-dose; defensiveness is heat protecting a wound, so lower the temperature before approaching it.',
              land: 'Close with genuine kindness toward self; no self-prosecution on the way out.',
              watch: 'Honesty weaponized against self or others - stop and cool further.',
            },
          },
        },
      },
    },
    kapha: {
      label: 'Kapha',
      element: 'earth and water',
      color: '#1D9E75',
      constitution_note:
        "Steady, devoted, slow to start and hard to stop. The steward's recurring jobs: lower start-friction, pair activation with physical movement, watch for comfort narrating itself as contentment.",
      pursuits: {
        therapy: {
          wheel: {
            low: { feeling: 'held', alignment: 'moderate' },
            medium: { feeling: 'compassionate', alignment: 'strong' },
            high: { feeling: 'generous', alignment: 'strong' },
          },
          target: 'medium',
          target_feeling: 'compassionate',
          lens: 'process, soften, integrate',
          activation_profile: ['beta-caryophyllene', 'limonene'],
          prime: 'Name the intention aloud; kapha will otherwise settle into comfort and call it processing.',
          apply: {
            beat_name: 'Process',
            copy: 'Process, soften, integrate - with movement. Kapha processes better walking than sitting.',
          },
          states: {
            from_below: {
              beat_name: 'Lift',
              chips: ['beta-caryophyllene', 'limonene'],
              guidance:
                'A gentle brightening trace inside a grounded profile - enough activation to engage, not enough to bypass the feeling.',
              land: 'Close with one articulated insight; kapha sessions evaporate without a marker.',
              watch: 'Compassion for others displacing the personal work - return the lens inward.',
            },
            at_target: {
              beat_name: 'Sustain',
              chips: ['none needed'],
              guidance: 'Compassion is present - work directly. Nothing needed; keep the body gently moving.',
              land: 'One articulated insight, then close.',
              watch: 'Comfort quietly replacing inquiry - if nothing was hard, nothing was processed.',
            },
            from_above: {
              beat_name: 'Settle',
              chips: ['none needed'],
              guidance:
                'Let elevated generosity settle naturally; no consumption needed - channel the warmth toward the work at hand.',
              land: 'Standard close with a marker insight.',
              watch: 'Generosity as avoidance - giving outward to avoid looking inward.',
            },
          },
        },
        pleasure: {
          wheel: {
            low: { feeling: 'cozy', alignment: 'moderate' },
            medium: { feeling: 'content', alignment: 'strong' },
            high: { feeling: 'joyful', alignment: 'strong' },
          },
          target: 'medium',
          target_feeling: 'content',
          lens: 'savor, taste, enjoy',
          activation_profile: ['limonene', 'beta-caryophyllene'],
          prime: 'Choose novelty deliberately - one new element per session, or kapha defaults to the familiar.',
          apply: {
            beat_name: 'Savor',
            copy: 'Savor, taste, enjoy - actively. Engage the senses rather than sinking beneath them.',
          },
          states: {
            from_below: {
              beat_name: 'Lift',
              chips: ['limonene', 'beta-caryophyllene'],
              guidance:
                'A bright trace to lift cozy into engaged contentment; without it kapha pleasure slides toward couch-lock.',
              land: 'End with light movement so the session does not become the entire evening.',
              watch: 'Content dissolving into inert - stand up, change rooms.',
            },
            at_target: {
              beat_name: 'Sustain',
              chips: ['none needed'],
              guidance: 'Contentment is here - engage it actively. Nothing more; keep one sense leading.',
              land: 'Light movement to close; carry the contentment into the next thing.',
              watch: 'Passive consumption of the experience instead of participation in it.',
            },
            from_above: {
              beat_name: 'Settle',
              chips: ['none needed'],
              guidance:
                'Nothing needed - joy in kapha is stable and safe. Enjoy the altitude while it lasts; do not consume more out of celebration.',
              land: 'Standard close; let the joy wind down on its own schedule.',
              watch: 'Celebratory re-dosing - the joy is complete without amplification.',
            },
          },
        },
        creativity: {
          wheel: {
            low: { feeling: 'stuck', alignment: 'gentle' },
            medium: { feeling: 'crafting', alignment: 'moderate' },
            high: { feeling: 'flowing', alignment: 'strong' },
          },
          target: 'high',
          target_feeling: 'flowing',
          lens: 'make, compose, riff',
          activation_profile: ['limonene', 'terpinolene', 'pinene'],
          prime: 'Start the work before consuming - kapha momentum must exist before it can be amplified.',
          apply: {
            beat_name: 'Create',
            copy: 'Make, compose, riff. Once flowing, kapha outlasts everyone - protect a long window.',
          },
          states: {
            from_below: {
              beat_name: 'Lift',
              chips: ['limonene', 'terpinolene', 'pinene'],
              guidance:
                'Real lift: a bright, energizing profile at a moderate dose, paired with physical movement first - kapha activation is bodily before it is mental.',
              land: "Stop mid-flow on purpose; an open loop restarts tomorrow's session.",
              watch: 'Waiting to feel ready - readiness follows action in kapha, never precedes it.',
            },
            at_target: {
              beat_name: 'Sustain',
              chips: ['none needed'],
              guidance: 'Flow achieved - nothing more. Kapha flow self-sustains for hours; feed it with snacks and water, not smoke.',
              land: 'Stop mid-flow on purpose, same rule - leave a thread to pull tomorrow.',
              watch: 'Flow becoming trance - check the work against the intention hourly.',
            },
            from_above: null,
            from_above_note:
              'High is the target ceiling for this pursuit; overshoot within the band is handled by the watch signal.',
          },
        },
        working: {
          wheel: {
            low: { feeling: 'sluggish', alignment: 'gentle' },
            medium: { feeling: 'steadfast', alignment: 'strong' },
            high: { feeling: 'unstoppable', alignment: 'moderate' },
          },
          target: 'medium',
          target_feeling: 'steadfast',
          lens: 'build, execute, complete',
          activation_profile: ['pinene', 'limonene'],
          prime: 'Break the work into visible stages; kapha endurance needs mile markers.',
          apply: {
            beat_name: 'Build',
            copy: 'Build, execute, complete. Steadfast is the kapha superpower - long, even effort.',
          },
          states: {
            from_below: {
              beat_name: 'Lift',
              chips: ['pinene', 'limonene'],
              guidance: 'Clarifying lift at a moderate dose plus a physical start ritual - stand, move, then begin.',
              land: 'Mark the stage reached; visible progress fuels the next session.',
              watch: 'Sluggish returning mid-session - move the body before reaching for more.',
            },
            at_target: {
              beat_name: 'Sustain',
              chips: ['none needed'],
              guidance: 'Steadfast is running - nothing needed. Protect the rhythm; breaks at the mile markers, not mid-stretch.',
              land: 'Mark the stage, then a genuine full stop.',
              watch: 'Skipping breaks because the rhythm feels good - endurance without recovery borrows from tomorrow.',
            },
            from_above: {
              beat_name: 'Settle',
              chips: ['beta-caryophyllene'],
              guidance:
                'Ease the pace slightly with an anchoring trace; unstoppable kapha ignores signals and overruns into depletion that takes days to surface.',
              land: 'Deliberate full stop with food and rest - not a taper, a stop.',
              watch: 'Momentum overriding judgment - unstoppable is a yellow flag in kapha, not a green one.',
            },
          },
        },
        athletics: {
          wheel: {
            low: { feeling: 'heavy', alignment: 'gentle' },
            medium: { feeling: 'enduring', alignment: 'moderate' },
            high: { feeling: 'vibrant', alignment: 'strong' },
          },
          target: 'high',
          target_feeling: 'vibrant',
          lens: 'move, train, play',
          activation_profile: ['limonene', 'terpinolene', 'pinene'],
          prime: 'Commit to the session the night before and lower start-friction to zero - clothes out, plan written.',
          apply: {
            beat_name: 'Move',
            copy: 'Move, train, play. Vibrant kapha has the deepest tank in the system - go long.',
          },
          states: {
            from_below: {
              beat_name: 'Lift',
              chips: ['limonene', 'terpinolene', 'pinene'],
              guidance:
                'The full bright stack at a moderate dose, after a deliberately easy first ten minutes - kapha ignition is gradual, then self-sustaining.',
              land: 'Eat well and schedule the next session immediately - kapha consistency is won at the calendar.',
              watch: 'Heavy winning the negotiation - do the first ten minutes anyway; the state follows.',
            },
            at_target: {
              beat_name: 'Sustain',
              chips: ['none needed'],
              guidance: 'Vibrant and moving - nothing needed. Fuel and hydrate; the tank is the advantage.',
              land: 'Full refuel and calendar the next session while the vibrancy is still talking.',
              watch: 'Going so long that the next session gets sacrificed - consistency beats heroics.',
            },
            from_above: null,
            from_above_note:
              'High is the target ceiling for this pursuit; overshoot within the band is handled by the watch signal.',
          },
        },
        visioning: {
          wheel: {
            low: { feeling: 'complacent', alignment: 'gentle' },
            medium: { feeling: 'rooted', alignment: 'strong' },
            high: { feeling: 'devoted', alignment: 'moderate' },
          },
          target: 'medium',
          target_feeling: 'rooted',
          lens: 'imagine, plan, dream forward',
          activation_profile: ['limonene', 'pinene'],
          prime: 'Anchor the vision to something already loved - kapha visions grow from existing roots, not blank pages.',
          apply: {
            beat_name: 'Envision',
            copy: 'Imagine, plan, dream forward from the ground up. Rooted vision is slow, real, and buildable.',
          },
          states: {
            from_below: {
              beat_name: 'Lift',
              chips: ['limonene', 'pinene'],
              guidance:
                'A bright trace to stir complacency into genuine questioning; ask what wants to grow, not what is missing.',
              land: 'Write one small next action - kapha visions need a first physical step or they compost.',
              watch: 'Comfort narrating itself as contentment - test whether the vision has moved in a month.',
            },
            at_target: {
              beat_name: 'Sustain',
              chips: ['none needed'],
              guidance: 'Rooted and imagining - nothing needed. Build the vision outward from what already works.',
              land: 'One written next action, then close.',
              watch: 'The vision staying safe - rooted should still reach somewhere new.',
            },
            from_above: {
              beat_name: 'Settle',
              chips: ['none needed'],
              guidance: 'Devotion running high needs no correction - aim it. Channel the elevation into commitments while it is warm.',
              land: 'Convert the devotion into two or three concrete commitments before it cools.',
              watch: 'Devotion to the vision replacing work on the vision.',
            },
          },
        },
      },
    },
  },
};

export const doshaKeys: DoshaKey[] = ['vata', 'pitta', 'kapha'];

export const getDosha = (key: DoshaKey): Dosha => doshaLens.doshas[key];

export const getPursuitKeys = (key: DoshaKey): PursuitKey[] =>
  Object.keys(doshaLens.doshas[key].pursuits) as PursuitKey[];

export const getPursuit = (doshaKey: DoshaKey, pursuitKey: PursuitKey): Pursuit | undefined =>
  doshaLens.doshas[doshaKey].pursuits[pursuitKey];

export const pursuitLabels: Record<PursuitKey, string> = {
  creativity: 'Creativity',
  visioning: 'Visioning',
  pleasure: 'Pleasure',
  working: 'Working',
  athletics: 'Athletics',
  therapy: 'Therapy',
};
