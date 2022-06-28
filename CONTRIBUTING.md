# Contribution Guidelines

MeTrack is an open source project, and contributions of any kind are welcome and appreciated. Feel free to open bug tickets and make feature requests. Easy bugs and features will be tagged with the `good first issue` label.

## Issues

If you encounter a bug, please file a bug report. If you have a feature to request, please open a feature request. If you would like to work on an issue or feature, there is no need to request permission. Please add tests to any new features.

## Pull Requests

In order to create a pull request for MeTrack, follow the GitHub instructions for [Creating a pull request from a fork](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork). Please link your pull request to an existing issue.

## Folder Structure

Description of the project files and directories.

```bash
.
|-- components
|   |-- card
|   |-- common
|   |-- course
|   |-- explore
|   |-- layout
|   |-- sections
|   |-- dashboard
|   |-- editor
|   |-- markdown
|   |-- profile
|   `-- projects
|-- hooks
|-- pages
|   |-- api
|   |-- auth
|   |-- dashboard
|   |-- explore
|   |-- profile
|   `-- project
|-- public
|   |-- auth
|   `-- overlay
|-- redux
|-- services
`--  styles
```


## Scripts

An explanation of the `package.json` scripts.

| Command         | Description                                 |
| --------------- | ------------------------------------------- |
| `dev`           | Run MeTrack in a development environment    |
| `build`         | Create a production build of MeTrack        |
| `start`         | Start a MeTrack in production               |
