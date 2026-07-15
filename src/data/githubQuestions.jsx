import React from 'react';

export const GITHUB_QUESTIONS = [
  {
    id: 8001,
    category: 'GitHub',
    difficulty: 'easy',
    question: "Explain the meaning of Git?",
    answer: (
      <>
        <p><strong>Git</strong> is a mature, actively maintained open-source distributed version control system (VCS). It is designed to track changes in source code files over time, coordinate concurrent work among programmers, and support non-linear workflows with lightweight branching models.</p>
      </>
    ),
  },
  {
    id: 8002,
    category: 'GitHub',
    difficulty: 'medium',
    question: "Highlight the differences between Git and SVN?",
    answer: (
      <>
        <ul><li><strong>Git (Distributed):</strong> Every developer has a full clone of the repository history locally. Operations are local and fast.</li><li><strong>SVN (Centralized):</strong> Relies on a single central server containing the complete history. Developers pull files to work, requiring network connection for logs/commits.</li></ul>
      </>
    ),
  },
  {
    id: 8003,
    category: 'GitHub',
    difficulty: 'medium',
    question: "What do you mean by a distributed VCS?",
    answer: (
      <>
        <p>A <strong>Distributed Version Control System (DVCS)</strong> means that every client's workstation has a complete copy (clone) of the codebase, including its entire historical metadata. If a server goes offline, any client repository can restore the files and history.</p>
      </>
    ),
  },
  {
    id: 8004,
    category: 'GitHub',
    difficulty: 'easy',
    question: "What is the main difference between GitHub and Git?",
    answer: (
      <>
        <ul><li><strong>Git:</strong> The command-line software tool that runs locally to track version history.</li><li><strong>GitHub:</strong> A cloud-based hosting service that stores Git repositories online, adding social collaboration features like Pull Requests, issues, and team access.</li></ul>
      </>
    ),
  },
  {
    id: 8005,
    category: 'GitHub',
    difficulty: 'easy',
    question: "What are the perks of using a (VCS) Version Control System?",
    answer: (
      <>
        <p>Perks include: historical audit trails, rollback capabilities, safe concurrent branch development, and automated merging of code modifications.</p>
      </>
    ),
  },
  {
    id: 8006,
    category: 'GitHub',
    difficulty: 'easy',
    question: "Which programming language is used in Git?",
    answer: (
      <>
        <p>Git is built primarily using <strong>C</strong> (for speed and low-level resource efficiency), along with helper scripts written in shell commands and Perl.</p>
      </>
    ),
  },
  {
    id: 8007,
    category: 'GitHub',
    difficulty: 'medium',
    question: "Specify the various Git repository hosting functions.",
    answer: (
      <>
        <p>Hosting functions include remote storage, access control authentication (SSH/HTTPS keys), collaboration workflows (Pull Requests), issue tracking, and integrated CI/CD runners (like GitHub Actions).</p>
      </>
    ),
  },
  {
    id: 8008,
    category: 'GitHub',
    difficulty: 'easy',
    question: "What do you mean by a commit message?",
    answer: (
      <>
        <p>A <strong>Commit Message</strong> is a text description written by developers when committing changes. It documents why changes were made and serves as a log for other developers reading the history.</p>
      </>
    ),
  },
  {
    id: 8009,
    category: 'GitHub',
    difficulty: 'medium',
    question: "How to fix a broken commit?",
    answer: (
      <>
        <p>If the commit is local and not pushed yet, you can stage corrections and run:</p><p><code>git commit --amend -m 'New message'</code></p>
      </>
    ),
  },
  {
    id: 8010,
    category: 'GitHub',
    difficulty: 'easy',
    question: "Define a repository in Git?",
    answer: (
      <>
        <p>A **Repository** is the database file structure where Git stores all version files, metadata, branches, tags, and historical records (the <code>.git</code> folder).</p>
      </>
    ),
  },
  {
    id: 8011,
    category: 'GitHub',
    difficulty: 'easy',
    question: "How to create a repository in Git?",
    answer: (
      <>
        <p>Initialize a new repository in a directory using: <br/> <code>git init</code> <br/> Or clone an existing remote repository using: <br/> <code>git clone &lt;url&gt;</code></p>
      </>
    ),
  },
  {
    id: 8012,
    category: 'GitHub',
    difficulty: 'medium',
    question: "What is a bare repository in Git?",
    answer: (
      <>
        <p>A **Bare Repository** contains only the Git administrative metadata and historical tracking object files (no checked-out working directory files). It is typically used as a central hub on servers to push and pull code safely.</p>
      </>
    ),
  },
  {
    id: 8013,
    category: 'GitHub',
    difficulty: 'easy',
    question: "What do you mean by conflict in Git?",
    answer: (
      <>
        <p>A **Merge Conflict** occurs when two developers modify the exact same line of code in the same file, or one developer deletes a file that another developer is editing, and Git cannot automatically determine which version to keep.</p>
      </>
    ),
  },
  {
    id: 8014,
    category: 'GitHub',
    difficulty: 'medium',
    question: "Why use git instaweb?",
    answer: (
      <>
        <p><code>git instaweb</code> launches a temporary, local web browser interface (like gitweb) to browse the commit history, directory structures, and differences of the local repository on localhost.</p>
      </>
    ),
  },
  {
    id: 8015,
    category: 'GitHub',
    difficulty: 'hard',
    question: "What do you mean by git is-tree?",
    answer: (
      <>
        <p>This is generally a typo/misnomer for <code>git ls-tree</code>. The <code>git ls-tree</code> command is a low-level plumbing command that lists the contents of a tree object (like files and subdirectories at a given commit or branch pointer).</p>
      </>
    ),
  },
  {
    id: 8016,
    category: 'GitHub',
    difficulty: 'easy',
    question: "Name and explain some Git commands.",
    answer: (
      <>
        <p>Common commands include:</p><ul><li><code>git status</code>: Shows status of files in working tree.</li><li><code>git add</code>: Stages modified files for commit.</li><li><code>git commit</code>: Records snapshot of staged changes.</li><li><code>git log</code>: Displays commit logs.</li></ul>
      </>
    ),
  },
  {
    id: 8017,
    category: 'GitHub',
    difficulty: 'medium',
    question: "How can you resolve a conflict in Git?",
    answer: (
      <>
        <p>To resolve conflicts: open conflict files, manually edit the text between conflict markers (<code>&lt;&lt;&lt;&lt;&lt;&lt;&lt;</code>, <code>=======</code>, <code>&gt;&gt;&gt;&gt;&gt;&gt;&gt;</code>), save files, stage them using <code>git add</code>, and run <code>git commit</code> to complete the merge.</p>
      </>
    ),
  },
  {
    id: 8018,
    category: 'GitHub',
    difficulty: 'medium',
    question: "How can you revert a commit that have been already pushed and made public in Git?",
    answer: (
      <>
        <p>Revert public commits by generating a new commit that applies inverse modifications using:</p><p><code>git revert &lt;commit_hash&gt;</code></p>
      </>
    ),
  },
  {
    id: 8019,
    category: 'GitHub',
    difficulty: 'medium',
    question: "What is the meaning of SubGit?",
    answer: (
      <>
        <p><strong>SubGit</strong> is a migration tool used to convert SVN (Subversion) repositories to Git, supporting continuous bidirectional synchronization between SVN and Git servers.</p>
      </>
    ),
  },
  {
    id: 8020,
    category: 'GitHub',
    difficulty: 'easy',
    question: "Highlight the differences between Git fetch and Git pull?",
    answer: (
      <>
        <ul><li><code>git fetch</code>: Downloads commit history and branch refs from remote without modifying local working files.</li><li><code>git pull</code>: Downloads remote commits and immediately attempts to merge them into the active local branch (combines fetch and merge).</li></ul>
      </>
    ),
  },
  {
    id: 8021,
    category: 'GitHub',
    difficulty: 'easy',
    question: "What is Index or Staging Area in Git?",
    answer: (
      <>
        <p>The **Staging Area** (or Index) is an intermediate storage file where Git prepares a snapshot of modifications to be recorded in the next commit.</p>
      </>
    ),
  },
  {
    id: 8022,
    category: 'GitHub',
    difficulty: 'medium',
    question: "What work is restored when a deleted branch is recovered?",
    answer: (
      <>
        <p>Recovering a deleted branch restores the branch pointer to its last referenced commit, retrieving all commits and code states associated with that branch.</p>
      </>
    ),
  },
  {
    id: 8023,
    category: 'GitHub',
    difficulty: 'medium',
    question: "What is a Git stash?",
    answer: (
      <>
        <p><code>git stash</code> takes your dirty working directory state (modified tracked files and staged changes) and saves it on a stack of unfinished changes, reverting your directory to match the clean HEAD state.</p>
      </>
    ),
  },
  {
    id: 8024,
    category: 'GitHub',
    difficulty: 'medium',
    question: "What is the function of the git stash apply command?",
    answer: (
      <>
        <p>Applies the saved modifications from the top of the stash stack back onto your active working directory, without deleting the stash entry from the stack.</p>
      </>
    ),
  },
  {
    id: 8025,
    category: 'GitHub',
    difficulty: 'easy',
    question: "What is the main difference between git status and git diff?",
    answer: (
      <>
        <ul><li><code>git status</code>: Shows *which* files are modified, staged, or untracked.</li><li><code>git diff</code>: Shows the exact *lines* of code added or deleted within modified files.</li></ul>
      </>
    ),
  },
  {
    id: 8026,
    category: 'GitHub',
    difficulty: 'easy',
    question: "What is the key difference between git remote and git clone?",
    answer: (
      <>
        <ul><li><code>git clone</code>: Copies an existing remote repository onto local disk, setting up trackers.</li><li><code>git remote</code>: Defines and manages connection URLs pointing to external remote repositories.</li></ul>
      </>
    ),
  },
  {
    id: 8027,
    category: 'GitHub',
    difficulty: 'medium',
    question: "Define a git stash drop?",
    answer: (
      <>
        <p>Deletes a specific stash entry from the stash stack list. If no arguments are passed, it drops the most recent stash.</p>
      </>
    ),
  },
  {
    id: 8028,
    category: 'GitHub',
    difficulty: 'hard',
    question: "What does a commit object consist of?",
    answer: (
      <>
        <p>A commit object consists of: the top-level tree hash representing the directory snapshot, parent commit hashes (for history), author metadata, committer details, and the commit message string.</p>
      </>
    ),
  },
  {
    id: 8029,
    category: 'GitHub',
    difficulty: 'medium',
    question: "Describe the different types of branching strategies.",
    answer: (
      <>
        <p>Branching strategies include: <strong>Gitflow</strong> (structured release cycles), <strong>GitHub Flow</strong> (agile feature branch deployment), and <strong>Trunk-Based Development</strong> (frequent merges directly into main).</p>
      </>
    ),
  },
  {
    id: 8030,
    category: 'GitHub',
    difficulty: 'medium',
    question: "What are the benefits of Forking Workflow?",
    answer: (
      <>
        <p>It allows contributors to fork and push commits to their own remote copy without requiring write permissions to the upstream primary repository, facilitating open-source contributions.</p>
      </>
    ),
  },
  {
    id: 8031,
    category: 'GitHub',
    difficulty: 'medium',
    question: "Why is it preferred to create an additional commit than amending the existing commit?",
    answer: (
      <>
        <p>Amending commits modifies historical records, which is dangerous if commits have been pushed. Adding a new commit preserves chronological audits safely.</p>
      </>
    ),
  },
  {
    id: 8032,
    category: 'GitHub',
    difficulty: 'medium',
    question: "Explain the Gitflow workflow?",
    answer: (
      <>
        <p>A branching model featuring dedicated branches for feature development (<code>feature/</code>), releases (<code>release/</code>), hotfixes (<code>hotfix/</code>), main production code (<code>master</code>), and pre-release code (<code>develop</code>).</p>
      </>
    ),
  },
  {
    id: 8033,
    category: 'GitHub',
    difficulty: 'hard',
    question: "Draw a comparison between index, HEAD, and working tree in Git.",
    answer: (
      <>
        <ul><li><strong>Working Tree:</strong> The directory files on disk that you edit directly.</li><li><strong>Index (Staging):</strong> Prepared changes slated for the next commit snapshot.</li><li><strong>HEAD:</strong> Pointer to the last commit registered on the active branch.</li></ul>
      </>
    ),
  },
  {
    id: 8034,
    category: 'GitHub',
    difficulty: 'medium',
    question: "What is the difference between merge and rebasing command in Git?",
    answer: (
      <>
        <ul><li><code>git merge</code>: Combines source branches by generating a new merge commit, preserving chronological history.</li><li><code>git rebase</code>: Rewrites commit histories by shifting branch base commits, creating a linear history.</li></ul>
      </>
    ),
  },
  {
    id: 8035,
    category: 'GitHub',
    difficulty: 'medium',
    question: "Explain the difference between resetting and reverting.",
    answer: (
      <>
        <ul><li><code>git reset</code>: Modifies branch pointers backward, modifying commit history (unsafe on shared branches).</li><li><code>git revert</code>: Creates a new commit that undoes changes of a past commit, keeping history linear (safe on shared branches).</li></ul>
      </>
    ),
  },
  {
    id: 8036,
    category: 'GitHub',
    difficulty: 'medium',
    question: "What do you mean by cherry-picking in Git?",
    answer: (
      <>
        <p><strong>Cherry-picking</strong> applies a specific commit's changes from another branch onto your active branch as a new commit.</p><p><code>git cherry-pick &lt;commit_hash&gt;</code></p>
      </>
    ),
  },
  {
    id: 8037,
    category: 'GitHub',
    difficulty: 'medium',
    question: "What is a git reflog command?",
    answer: (
      <>
        <p><code>git reflog</code> keeps track of every time a branch pointer or HEAD moves, allowing recovery of deleted commits or branches that are no longer accessible.</p>
      </>
    ),
  },
  {
    id: 8038,
    category: 'GitHub',
    difficulty: 'easy',
    question: "What are the major benefits of using Git?",
    answer: (
      <>
        <p>Benefits: lightning-fast local operations, safe branching/merging features, distributed offline work capabilities, and cryptographic data integrity validation.</p>
      </>
    ),
  },
  {
    id: 8039,
    category: 'GitHub',
    difficulty: 'easy',
    question: "Define the Git push command.",
    answer: (
      <>
        <p>Uploads local branch commits and updates pointer references on the upstream remote repository.</p>
      </>
    ),
  },
  {
    id: 8040,
    category: 'GitHub',
    difficulty: 'medium',
    question: "How to resolve a merge conflict in Git?",
    answer: (
      <>
        <p>Open files with conflict markers, manually resolve the overlapping edits, save files, stage them with <code>git add</code>, and run <code>git commit</code>.</p>
      </>
    ),
  },
  {
    id: 8041,
    category: 'GitHub',
    difficulty: 'medium',
    question: "What are the functions of git reset --mixed and git merge --abort commands?",
    answer: (
      <>
        <ul><li><code>git reset --mixed</code>: Resets HEAD pointer and unstages files from Index, leaving working tree modified.</li><li><code>git merge --abort</code>: Restores files to pre-merge states if merge conflict resolutions fail.</li></ul>
      </>
    ),
  },
  {
    id: 8042,
    category: 'GitHub',
    difficulty: 'medium',
    question: "How to find a list of files that has been changed in a particular commit?",
    answer: (
      <>
        <p>Use the diff-tree command: <br/> <code>git diff-tree --no-commit-id --name-only -r &lt;commit_hash&gt;</code></p>
      </>
    ),
  },
  {
    id: 8043,
    category: 'GitHub',
    difficulty: 'easy',
    question: "What is the difference between branch, fork, and clone?",
    answer: (
      <>
        <ul><li><strong>Branch:</strong> A pointer to a commit within a single repository directory.</li><li><strong>Fork:</strong> A copy of a remote repository saved under another developer account on host servers.</li><li><strong>Clone:</strong> A copy of a remote repository downloaded to a local disk.</li></ul>
      </>
    ),
  },
  {
    id: 8044,
    category: 'GitHub',
    difficulty: 'medium',
    question: "What is the difference between git rebase and git merge?",
    answer: (
      <>
        <p>Rebasing moves the branch base, creating a linear history. Merging creates a new merge commit, preserving historical branches.</p>
      </>
    ),
  },
  {
    id: 8045,
    category: 'GitHub',
    difficulty: 'medium',
    question: "How to discover if a branch has already been merged or not?",
    answer: (
      <>
        <p>Run: <code>git branch --merged</code> to list merged branches. Use <code>git branch --no-merged</code> to list unmerged branches.</p>
      </>
    ),
  },
  {
    id: 8046,
    category: 'GitHub',
    difficulty: 'easy',
    question: "What is the function of the git clone command?",
    answer: (
      <>
        <p>Clones an existing remote repository onto local disk, creating directory files and historical tracking refs.</p>
      </>
    ),
  },
  {
    id: 8047,
    category: 'GitHub',
    difficulty: 'easy',
    question: "What is the use of the 'git config' command?",
    answer: (
      <>
        <p>Configures Git installation properties (e.g. <code>git config --global user.name 'User'</code>).</p>
      </>
    ),
  },
  {
    id: 8048,
    category: 'GitHub',
    difficulty: 'easy',
    question: "What is the primary purpose of branching in Git?",
    answer: (
      <>
        <p>It allows developers to work on new features or bug fixes in isolation, without modifying the main codebase.</p>
      </>
    ),
  },
  {
    id: 8049,
    category: 'GitHub',
    difficulty: 'medium',
    question: "What is the most common branching pattern in GIT?",
    answer: (
      <>
        <p>GitHub Flow. Developers create feature branches (e.g. <code>feature-name</code>) from main, build, and submit Pull Requests to merge changes.</p>
      </>
    ),
  },
  {
    id: 8050,
    category: 'GitHub',
    difficulty: 'easy',
    question: "What is a Git version control?",
    answer: (
      <>
        <p>A software utility designed to record changes to files, allowing developers to review history or roll back edits.</p>
      </>
    ),
  },
  {
    id: 8051,
    category: 'GitHub',
    difficulty: 'easy',
    question: "List down some best graphical Git clients for LINUX?",
    answer: (
      <>
        <p>Linux graphical clients include Gitg, Git Cola, GitKraken, and SmartGit.</p>
      </>
    ),
  },
  {
    id: 8052,
    category: 'GitHub',
    difficulty: 'easy',
    question: "What is the purpose of a 'Git Status'?",
    answer: (
      <>
        <p>Displays the status of modifications, highlighting staged, modified, and untracked files.</p>
      </>
    ),
  },
  {
    id: 8053,
    category: 'GitHub',
    difficulty: 'easy',
    question: "What is the central function of 'git checkout' command in Git?",
    answer: (
      <>
        <p>Updates files in the working directory to match the version stored in the branch or commit reference target.</p>
      </>
    ),
  },
  {
    id: 8054,
    category: 'GitHub',
    difficulty: 'medium',
    question: "Explain the function of Git Reset?",
    answer: (
      <>
        <p>Resets the current HEAD pointer to a specific commit state, undoing previous commits or index stagings.</p>
      </>
    ),
  },
  {
    id: 8055,
    category: 'GitHub',
    difficulty: 'easy',
    question: "Why use git log?",
    answer: (
      <>
        <p>Displays a list of commits recorded in the repository history, including commit hashes, authors, dates, and messages.</p>
      </>
    ),
  },
  {
    id: 8056,
    category: 'GitHub',
    difficulty: 'medium',
    question: "What does 'hooks' contain?",
    answer: (
      <>
        <p>The <code>.git/hooks/</code> directory contains sample shell script triggers that run on specific Git actions (like pre-commit validation).</p>
      </>
    ),
  },
  {
    id: 8057,
    category: 'GitHub',
    difficulty: 'easy',
    question: "Define a git pull origin?",
    answer: (
      <>
        <p>Fetches remote commits and immediately merges them into the current active branch tracker.</p>
      </>
    ),
  },
  {
    id: 8058,
    category: 'GitHub',
    difficulty: 'easy',
    question: "What does a git commit do?",
    answer: (
      <>
        <p>Creates a snapshot of staged changes and records it in the repository history directory database.</p>
      </>
    ),
  },
  {
    id: 8059,
    category: 'GitHub',
    difficulty: 'medium',
    question: "What do you mean by Rebase in Git?",
    answer: (
      <>
        <p>Applies a sequence of commits from one branch on top of another branch base pointer, rewriting history.</p>
      </>
    ),
  },
  {
    id: 8060,
    category: 'GitHub',
    difficulty: 'medium',
    question: "What are the Submodules in Git?",
    answer: (
      <>
        <p>Submodules allow you to keep a Git repository as a subdirectory of another Git repository, locking it to a specific commit.</p>
      </>
    ),
  },
  {
    id: 8061,
    category: 'GitHub',
    difficulty: 'easy',
    question: "What are the different types of VCS?",
    answer: (
      <>
        <ul><li><strong>Local VCS:</strong> Single database files on a local disk (e.g. SCCS).</li><li><strong>Centralized VCS:</strong> Single server storing files, clients check out specific versions (e.g. SVN, Perforce).</li><li><strong>Distributed VCS:</strong> Every client has a full repository clone locally (e.g. Git, Mercurial).</li></ul>
      </>
    ),
  },
  {
    id: 8062,
    category: 'GitHub',
    difficulty: 'medium',
    question: "What are the key benefits of Git over SVN?",
    answer: (
      <>
        <p>Git benefits over SVN: fast offline actions, lightweight branching/merging strategies, robust distributed repositories, and secure commits.</p>
      </>
    ),
  },
  {
    id: 8063,
    category: 'GitHub',
    difficulty: 'easy',
    question: "What is a Git Bash?",
    answer: (
      <>
        <p>An application for Windows environments that provides a command line interface simulating a Unix shell environment with Git tools.</p>
      </>
    ),
  },
  {
    id: 8064,
    category: 'GitHub',
    difficulty: 'medium',
    question: "What do you mean by forking in Git?",
    answer: (
      <>
        <p>Copying an upstream repository onto your server account on Git hosts, permitting edits without upstream rights.</p>
      </>
    ),
  },
  {
    id: 8065,
    category: 'GitHub',
    difficulty: 'easy',
    question: "What is a pull command in Git?",
    answer: (
      <>
        <p>Retrieves remote changes and merges them directly into local branches.</p>
      </>
    ),
  },
  {
    id: 8066,
    category: 'GitHub',
    difficulty: 'easy',
    question: "What is a revert command in Git?",
    answer: (
      <>
        <p>Creates a new commit containing inverse modifications to safely undo a previous commit on shared branches.</p>
      </>
    ),
  },
  {
    id: 8067,
    category: 'GitHub',
    difficulty: 'medium',
    question: "What is the difference between log and git reflog?",
    answer: (
      <>
        <ul><li><code>git log</code>: Shows public commit history of the active branch.</li><li><code>git reflog</code>: Shows private logs of HEAD movements locally, even deleted commits.</li></ul>
      </>
    ),
  },
  {
    id: 8068,
    category: 'GitHub',
    difficulty: 'easy',
    question: "Define a .git directory?",
    answer: (
      <>
        <p>The hidden directory at repository roots where Git stores all databases, configurations, and version histories.</p>
      </>
    ),
  },
  {
    id: 8069,
    category: 'GitHub',
    difficulty: 'medium',
    question: "What happens if a .git directory gets deleted?",
    answer: (
      <>
        <p>The directory stops being a Git repository. You lose all commit histories, branches, and configs, but on-disk files remain intact.</p>
      </>
    ),
  },
  {
    id: 8070,
    category: 'GitHub',
    difficulty: 'easy',
    question: "Explain Git Branches.",
    answer: (
      <>
        <p>Branches are lightweight pointers referencing specific commits, allowing developers to isolate feature development.</p>
      </>
    ),
  },
  {
    id: 8071,
    category: 'GitHub',
    difficulty: 'medium',
    question: "How can you revert a commit in Git without creating a new commit?",
    answer: (
      <>
        <p>If the commit is local, reset the pointer: <br/> <code>git reset --soft HEAD~1</code> <br/> This leaves modifications staged in the Index.</p>
      </>
    ),
  },
  {
    id: 8072,
    category: 'GitHub',
    difficulty: 'hard',
    question: "What is Git LFS (Large File Storage), and why might you use it?",
    answer: (
      <>
        <p>Git LFS replaces large files (videos, audio) with text pointers inside Git, storing raw files on external cloud servers to keep repository sizes small.</p>
      </>
    ),
  },
  {
    id: 8073,
    category: 'GitHub',
    difficulty: 'hard',
    question: "Explain the concept of Git hooks. How they can be used?",
    answer: (
      <>
        <p>Custom shell scripts in <code>.git/hooks/</code> that trigger actions automatically (like validating commit message format before recording commits).</p>
      </>
    ),
  },
  {
    id: 8074,
    category: 'GitHub',
    difficulty: 'medium',
    question: "What is a Git rebase, and when would you use it instead of Git merge?",
    answer: (
      <>
        <p>Rebase rewrites local feature branch base commits to keep public commit logs clean and linear before merging.</p>
      </>
    ),
  },
  {
    id: 8075,
    category: 'GitHub',
    difficulty: 'medium',
    question: "Explain what a Git submodule is and how it's useful.",
    answer: (
      <>
        <p>Integrates another Git repository as a subdirectory of your main repository, locking code dependencies to specific commit versions.</p>
      </>
    ),
  },
  {
    id: 8076,
    category: 'GitHub',
    difficulty: 'easy',
    question: "What is a Git fork, and how does it differ from a Git clone?",
    answer: (
      <>
        <p>Forks copy remote repositories on hosting servers. Clones copy remote repositories onto local user disks.</p>
      </>
    ),
  },
  {
    id: 8077,
    category: 'GitHub',
    difficulty: 'easy',
    question: "What is the function of git pull origin master?",
    answer: (
      <>
        <p>Downloads commits from the remote master branch and attempts to merge them into the active local branch.</p>
      </>
    ),
  },
  {
    id: 8078,
    category: 'GitHub',
    difficulty: 'easy',
    question: "What is Git merge conflict?",
    answer: (
      <>
        <p>An overlap conflict occurring when Git cannot resolve contradictory code updates in the same files automatically.</p>
      </>
    ),
  },
  {
    id: 8079,
    category: 'GitHub',
    difficulty: 'medium',
    question: "What is the role of git ls-tree?",
    answer: (
      <>
        <p>Plumbing command listing directory files, subdirectories, modes, and object hashes at a commit pointer.</p>
      </>
    ),
  },
  {
    id: 8080,
    category: 'GitHub',
    difficulty: 'medium',
    question: "What is the difference between bare repository and the standard way of initializing a Git repository?",
    answer: (
      <>
        <p>Bare repositories contain only Git metadata (no files checked-out). Standard repos contain administrative files alongside editable files on disk.</p>
      </>
    ),
  },
  {
    id: 8081,
    category: 'GitHub',
    difficulty: 'hard',
    question: "What is Git Bisect?",
    answer: (
      <>
        <p>A debugging tool that uses binary search to scan commit ranges, identifying which specific commit introduced a bug or regression.</p>
      </>
    ),
  },
  {
    id: 8082,
    category: 'GitHub',
    difficulty: 'medium',
    question: "What is the functionality of git clean command?",
    answer: (
      <>
        <p>Deletes untracked files from the local working directory (use with <code>-f</code> to force deletion, or <code>-n</code> for dry-run).</p>
      </>
    ),
  },
  {
    id: 8083,
    category: 'GitHub',
    difficulty: 'easy',
    question: "What is tagging in Git?",
    answer: (
      <>
        <p>Creates an immutable named marker referencing a specific commit, widely used to mark release milestones (e.g. <code>v1.0.0</code>).</p>
      </>
    ),
  },
  {
    id: 8084,
    category: 'GitHub',
    difficulty: 'medium',
    question: "What is a branching strategy?",
    answer: (
      <>
        <p>Rules defining how development branches are named, structured, and integrated into the primary main branch.</p>
      </>
    ),
  },
  {
    id: 8085,
    category: 'GitHub',
    difficulty: 'medium',
    question: "What is the difference between Git stash and Git stash pop?",
    answer: (
      <>
        <ul><li><code>git stash</code>: Saves active modifications to the stash stack.</li><li><code>git stash pop</code>: Applies saved modifications to the directory and deletes that stash from the stack list.</li></ul>
      </>
    ),
  },
  {
    id: 8086,
    category: 'GitHub',
    difficulty: 'medium',
    question: "What is git annotate command?",
    answer: (
      <>
        <p>Shows line-by-line file details, listing which developer and commit hash modified each specific line (similar to git blame).</p>
      </>
    ),
  },
  {
    id: 8087,
    category: 'GitHub',
    difficulty: 'medium',
    question: "What is git cherry-pick?",
    answer: (
      <>
        <p>Applies changes of a specific commit hash from an external branch onto the active local branch.</p>
      </>
    ),
  },
  {
    id: 8088,
    category: 'GitHub',
    difficulty: 'easy',
    question: "What is the key difference between \u201cpull request\u201d and \u201cbranch\u201d?",
    answer: (
      <>
        <ul><li><strong>Branch:</strong> Git pointer separating active modifications.</li><li><strong>Pull Request:</strong> GitHub interface to review, discuss, and request merging feature branch codes.</li></ul>
      </>
    ),
  },
  {
    id: 8089,
    category: 'GitHub',
    difficulty: 'hard',
    question: "What is a detached head?",
    answer: (
      <>
        <p>A state where the HEAD pointer references a specific commit hash directly, rather than referencing an active branch name.</p>
      </>
    ),
  },
  {
    id: 8090,
    category: 'GitHub',
    difficulty: 'easy',
    question: "Mention some important commands in Git.",
    answer: (
      <>
        <p>Important commands: <code>init</code>, <code>clone</code>, <code>add</code>, <code>commit</code>, <code>push</code>, <code>pull</code>, <code>status</code>, <code>branch</code>, <code>checkout</code>, and <code>merge</code>.</p>
      </>
    ),
  },
  {
    id: 8091,
    category: 'GitHub',
    difficulty: 'easy',
    question: "What is git status command?",
    answer: (
      <>
        <p>Shows file modification states relative to HEAD and staging indexes.</p>
      </>
    ),
  },
  {
    id: 8092,
    category: 'GitHub',
    difficulty: 'easy',
    question: "What is best way to resolve conflicts in Git?",
    answer: (
      <>
        <p>Manually resolve conflicts in text editors, review using merge tools, test changes, stage files, and commit.</p>
      </>
    ),
  },
  {
    id: 8093,
    category: 'GitHub',
    difficulty: 'medium',
    question: "What is Git rebase?",
    answer: (
      <>
        <p>Re-applies local commits on top of updated upstream branch base commits, keeping commit histories linear.</p>
      </>
    ),
  },
  {
    id: 8094,
    category: 'GitHub',
    difficulty: 'medium',
    question: "What is the role of git stash drop?",
    answer: (
      <>
        <p>Deletes a saved stash entry from the repository's stash stack.</p>
      </>
    ),
  },
  {
    id: 8095,
    category: 'GitHub',
    difficulty: 'easy',
    question: "What is the main difference between fork, branch, and clone?",
    answer: (
      <>
        <p>Branches are repo pointers. Forks copy repos on servers. Clones copy repos to local disks.</p>
      </>
    ),
  },
  {
    id: 8096,
    category: 'GitHub',
    difficulty: 'easy',
    question: "Is GitHub and Git the same thing?",
    answer: (
      <>
        <p>No. Git is the open-source CLI program tracking history. GitHub is the cloud platform hosting Git repositories.</p>
      </>
    ),
  },
  {
    id: 8097,
    category: 'GitHub',
    difficulty: 'easy',
    question: "What is the purpose of Git Bash?",
    answer: (
      <>
        <p>Provides a bash terminal environment to run Unix commands and Git scripts on Windows platforms.</p>
      </>
    ),
  },
  {
    id: 8098,
    category: 'GitHub',
    difficulty: 'easy',
    question: "What is git checkout command?",
    answer: (
      <>
        <p>Switches active branch pointers or checks out specific file revisions from commit history.</p>
      </>
    ),
  },
  {
    id: 8099,
    category: 'GitHub',
    difficulty: 'easy',
    question: "What is \u2018git config\u2019?",
    answer: (
      <>
        <p>Utility that configures local or global Git configurations (like email and username credentials).</p>
      </>
    ),
  },
  {
    id: 8100,
    category: 'GitHub',
    difficulty: 'easy',
    question: "What is HEAD in Git?",
    answer: (
      <>
        <p>HEAD is the reference pointer directing Git to the last commit recorded on the active branch.</p>
      </>
    ),
  },
];
