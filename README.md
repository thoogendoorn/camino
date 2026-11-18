# Camino Spanish

A free, self-contained Spanish course for the browser: Castilian Spanish from A1 to C2, built around spaced repetition, lots of practice and real listening.

* **67 stages** on the Camino de Santiago (A1–B2 in full depth, plus a first set of C1–C2 stages).
* **About 3,900 words** with example sentences: 2,300 in the stages and 54 thematic decks for the rest, sized to what CEFR B2 expects.
* **1,140 grammar drills, 450+ key sentences and 170+ graded readings** with tap-to-translate.
* Exercises: multiple choice, typing, words in context, matching, el/la, listening quizzes, dictation, sentence building, translation, shadowing with speech recognition, conjugation in 15 tenses (vosotros included), writing with AI feedback, and role-play with an AI tutor.
* **Exams:** an adaptive placement test, a level exam for A1–C1, and DELE-style mock exams (A1, A2, B1, B2, C1; two per level) with all four papers, timed and scored like the real thing. Writing and speaking are marked by you against the DELE criteria and a model answer; AI marking is optional.
* **Practice (Entreno):** transformations, error hunt, contrast pairs, collocations, register, word building (about 780 hand-written items), plus conjugation in context, tenses in a story, dictogloss and a speed round built from the course texts.
* **Mistake notebook:** every answer is filed under its grammar point or word topic; your weakest points get a 10-minute session.
* An FSRS spaced-repetition scheduler, a free-practice page (Entreno), input-hour tracking with podcast links, streaks, stats and stamps.

No build step, no server code and no account needed.

---

## 1. Run it on your computer (simplest)

1. Unzip `camino.zip`.
2. Double-click `index.html`. It opens in your browser and works offline (podcast links and fonts need internet).

Progress is saved in that browser automatically. Chrome, Edge, Safari and Firefox all work. Speech recognition needs Chrome, Edge or Safari.

## 2. Put it online for free with GitHub Pages

This gives you one address you can open on your phone and laptop.

1. Create a free account at <https://github.com>.
2. Click **+ › New repository**. Name it `camino`, set it to **Public** (free Pages needs a public repo), and click **Create repository**.
3. On the new repository page click **uploading an existing file**. Drag in **everything inside** the unzipped folder: `index.html`, `core.js`, `ex.js`, `app.js`, `verbs.js`, `.nojekyll`, `README.md` and the whole `data` folder. Click **Commit changes**.
   *Tip:* if your file browser hides `.nojekyll`, the site still works without it.
4. Go to **Settings › Pages**. Under *Build and deployment* choose **Deploy from a branch**, branch **main**, folder **/ (root)**, and **Save**.
5. After a minute your course is live at `https://YOUR-USERNAME.github.io/camino/`. Add it to your phone's home screen.

To update later, upload the changed files again in the same way.

> Each address keeps its own progress: claude.ai, your GitHub Pages site and a local file are separate. Use **Settings › Download backup** and **Import backup** to move progress between them. Importing merges, so nothing is lost.

## 3. Sync between devices

You have three options:

| Option | Cost | Setup |
|---|---|---|
| **Backup files** | free | Settings › Download backup on one device, Import backup on the other (for example via Google Drive or e-mail). Imports merge. |
| **claude.ai** | needs a Claude account | Automatic when the page is opened there while signed in. |
| **Supabase** | free tier | 10 minutes, once. Works anywhere, including GitHub Pages. |

### Setting up Supabase sync

1. Create a free account at <https://supabase.com> and click **New project** (any name and region; save the database password somewhere, but you won't need it here).
2. In the project, open **SQL Editor › New query**, paste this and click **Run**:

   ```sql
   create table public.camino_state (
     user_id uuid primary key references auth.users on delete cascade,
     data jsonb not null,
     updated_at timestamptz not null default now()
   );
   alter table public.camino_state enable row level security;
   create policy "own row only" on public.camino_state
     for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
   -- Supabase projects no longer grant API access to new tables automatically:
   grant select, insert, update on public.camino_state to authenticated;
   ```

3. Optional but easier: **Authentication › Sign In / Providers › Email** and turn off **Confirm email**. (Otherwise you click a link in a confirmation e-mail first.)
4. Copy two things:
   * the **Project URL** (`https://xxxx.supabase.co`): **Project Settings › Data API**, or the **Connect** button at the top of the dashboard;
   * the **Publishable key** (`sb_publishable_…`): **Project Settings › API Keys**. On older projects this is the legacy **anon public** key; either works. Never use the **secret** key (`sb_secret_…`) in a browser.
5. In Camino open **Settings › Saving and sync**, paste the URL and key, enter an e-mail and password, and click **Create account**. On your other devices, paste the same URL and key and click **Sign in**.

The publishable (anon) key is designed to be public; the row-level-security policy makes sure each account can only read and write its own row. Your sign-in token is stored only in that browser. Free Supabase projects pause after a week without any use; open the Supabase dashboard and click **Restore** if that happens (your data stays).

## 4. The AI tutor (optional)

Conversation practice, writing feedback and the "Why?" button need an AI model:

* **On claude.ai** it works automatically.
* **Anywhere else**, use your own API key. In **Settings › AI tutor** choose the provider, paste your key and click **Test**.
  * Anthropic: create a key at <https://console.anthropic.com> (Settings › API keys). Default model: `claude-haiku-5-5` (fast and cheap); type another model name to change it.
  * OpenAI: create a key at <https://platform.openai.com/api-keys>. Default model: `gpt-4o-mini`.
  * Set a monthly spending limit in the provider's console. An hour of chatting typically costs a few cents.

The key is stored only in your browser's local storage, is never included in backups or sync, and is sent only to the provider you chose. Don't add a key on a shared computer.

## 5. Daily routine (45 minutes)

1. **Review** everything due (10–20 min).
2. One or two **lesson steps** of your current stage (10–15 min).
3. A **batch of new words** from the stage or a deck (5–10 min).
4. **Listen** to the stage's podcast or a video and log the minutes (15+ min).
5. Use **Practice** (Entreno) whenever you have spare minutes; write or chat with the tutor twice a week.

Settings let you change the daily goal, words per batch, the new-word target per day, and **free roam** (open every stage without checkpoints).

## 6. Files

```
index.html     page, styles, script order
core.js        content index, saving, sync (claude.ai + Supabase), FSRS scheduler, speech, AI, answer checking
ex.js          exercise types, sessions, workouts
app.js         screens
verbs.js       conjugation engine (15 tenses, ~120 verbs, vosotros)
data/define.js content format and parsers
data/a1a.js …  stages (A1–B2 in the compact text format; c1.js, c2.js in the older format)
data/decks*.js thematic word decks
data/mock-*.js DELE-style mock exams (two per level)
data/practice-*.js hand-written practice items
practice.js    new exercise types, workouts, mistake notebook
exams.js       placement test, level exams, mock exams
config.js      your own settings (built-in Supabase URL + publishable key)
data/resources.js  podcast and video links
data/migrate.js    upgrades progress saved by the first version
```

### Adding content

Stages and decks are plain text blocks, one item per line, fields separated by ` | `:

```js
CAMINO.deck('B1')({ id: 'deck-my-topic', title: 'My topic', desc: 'Short description', V: `
la palabra | word | Esta {palabra} es difícil. | This word is difficult.
` });
```

* `V` vocabulary: `spanish | english | example with the {target} form | translation`
* `D` drills: `sentence with ___ | answer (alternatives a|b) | English`
* `S` key sentences: `spanish | english`
* `R` readings: `[{ t: 'Title', x: 'Text', q: 'Question | wrong ; *right ; wrong' }]`

Practice blocks: `CAMINO.prac('B1', 'errors', 'Por y para')(\`wrong sentence | correct sentence | why\`)`. Formats for every kind are listed in `data/define.js`.

Add the file to the `files` list in `index.html`, before `core.js`. Card ids are derived from the Spanish text, so editing a word's Spanish starts a new card for it.

## 7. Privacy

Everything stays in your browser unless you switch on sync. No analytics, no tracking. External requests: Google Fonts, the podcast/video sites you open, and (only if you set them up) Supabase and your AI provider.
