# Git To Better Living.

Need a quick git refresher? The aim of this repo is to dust off the cobwebs around common git commands you will be running in your group projects and every day dev life. It also introduces some best practices around commit messaging.

# Prequisites

- nodejs 18 or higher
- npm 8 or higher

## The Challenge.

First up your table will need to pick a PR manager. This person needs to clone the repo

```bash
git clone https://github.com/JeremyPittard/git-to-better-living.git
```

Next, the PR manager will need to:

1. delete the .git folder in the repo they just cloned
2. create a new git repository on their github and push the code they just cloned to it.
3. Add everyone on their table as collaborators.

Once everyone on the table are added as collaborators. Everyone else on the table will need to clone the PR managers repo and install the projects node modules.

In the folder ./src/data there is a file named template-user.js. Copy it, and personalise the keys on the object to suit yourself. From there you need to open a pull request. [read more about pull requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)

Now there are some rules set in place that are based upon either best practice or me making sure the repo does not accidentally break mid session.

### Rule 1

you must make a good commit message. A good commit message is subjective BUT we will use a common (and opinionated) ruleset.
we will go over these in session but you can [read about them here](https://www.conventionalcommits.org/en/v1.0.0/) .

example of a good commit message

`feat: enforce good commit messages`

### Rule 2

you may only add/edit files in the src/data folder that is not template-user. This is purely to avoid anything breaking, There is a hook to make sure you don't accidentally do it. I expect a few people may need to troubleshoot this. _hint_ you can get around this by unstaging files that violate this rule.

Once you have submitted a pull request. One of the repo maintainence crew (me, another mentor, probably me). Will review your PR. We might find something that could be done differently/fits the codebase better and then request a change. We also might approve it and merge it into main. From there you can see the work you've contributed in the main branch once you fetch/pull.

Bonne chance!
