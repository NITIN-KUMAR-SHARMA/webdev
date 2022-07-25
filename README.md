# WebDev: Web Development Course

This is the source code and training content for Web Development courses taught by [Andrew Smith](https://github.com/andrewsouthpaw/).

## Before you begin

If you're familiar with git, I recommend forking the repo before cloning, so you can keep track of your work.

You can also [download a `.zip` of the repo](https://i.imgur.com/muHwvo2.png) if you're not familiar with git.

<details><summary>For people who have worked with git before</summary>

Start by forking and cloning the repo. If you don't clone the repo, then you won't be able to save your work on exercises to your own cloned repo. Choose to not fork at your own risk.

Once you've cloned the repo, set this repo as the `upstream`

```
$ git remote add upstream https://github.com/AndrewSouthpaw/webdev.git
```

When I update the repo and you want to pull the recent changes in upstream:

```
$ git checkout master
$ git pull upstream master
```

You're encouraged to work on a branch during the course, so you can easily re-play your changes on top of any updates I make by running a little helper script:

```
$ bin/branchupdate
``` 

</details>

## Setup

We're going to walk through installation of the following:

- Node.js
- yarn

You can check if you already have what you need:

```bash
$ node -v
# should be >= 14
$ npm -v
# should be >= 6
$ yarn -v
# should be >= 1.22
```

If you already have these installed, then skip ahead.

### `Node.js`

Visit <https://nodejs.org/en/download/> and download the LTS version (v16). Install it, then run

```bash
$ node -v
```

and verify it prints out the version you installed.

### `npm`

It comes with your Node.js install. Verify the installation with:

```bash
$ npm -v
# should be >= 6
```

**NB: Avoid `sudo` with `npm`**: If you ever install packages with `npm` and you are prompted to use `sudo`, something has gone wrong. Don't do it, as it will all end in tears and your system can get very messed up. Ask for help.

### `yarn`

`npm` is nice and all, but `yarn` (a competitor to `npm`) is better. Install it this way:

```bash
$ npm install --global yarn
$ yarn -v
# should be >= 1.22
```

### Install local dependencies

```bash
$ cd src
$ yarn

# if you get a permissions error, try this:
$ npm install
```

Now verify you have everything installed by running the webserver:

```bash
$ npm run start
```

You should see it print out `Waiting...` at the end, and sit there. That means your webserver is running. You can `Ctrl+C` to stop the webserver at any time.

### Text Editor

You can use your favorite text editor to follow along.

I'm a fan of the [WebStorm](https://www.jetbrains.com/webstorm/) IDE by JetBrains. Free trial, not too expensive, definitely worth the money in my book.

[VS Code](https://code.visualstudio.com/) is the most popular open-source editor.

**What should I choose??** 😧

I think WebStorm is hands down way better.

### Local JS Environment

You can always open a console in Firefox or Chrome and get to a JS REPL.

There's an app called [RunJS](https://runjs.dev/) that allows you to write and evaluate JS, which I'll be using a lot of demonstrations.

### React DevTools (for React class only)

We'll install an extension that makes it easier to debug React apps.

* [Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
* [Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)

## Folder Structure

### Slides

Follow along using the links in `/slides` to view the latest version of the slides for this course.

(GitHub isn't the best at version-controlling binary files, so I keep the slides in Google Drive to keep the repo smaller.)

### Exercises

Most of the action lives inside `/src`, that's where you'll be doing most of your exercises. There's a webserver you'll want to run.

```shell
$ cd src
$ npm run start
```

> If you're a Windows user, you may also run into other security blocks like Windows Defender, just go ahead and cancel/ignore/permit any warnings.

Then visit <http://localhost:3000/js/> (the trailing slash matters). This will lead you to various interactive pages and test suites that will be used throughout the course.

Other exercises will have you work with tests. In those cases, open one (or both) files for instructions. You can run the tests by running the commands in the prompt from the `/src` folder.

### For React class

You will build out a project called RMDb. Set up the project by visiting `/projects/rmdb` and installing the dependencies, then running the project:

```shell
$ cd projects/rmdb
$ yarn
$ yarn start
```

The exercises are under [/projects/rmdb/exercises](/projects/rmdb/exercises). Your instructor will inform you of which one to work on next.

Each exercise is cumulative, building on the previous one. There is a reference solution provided at the top of each exercise in case you were unable to complete the previous lab.

### Sandbox (optional)

There's a JS sandbox under `/sandbox`, with a skeleton JS starter project. Go into that directory and follow the `README.md` to get it running.

For React, use `/sandbox_react` which has some additional libraries and setup.
