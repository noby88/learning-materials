# GIT

## What is it?

- **Git** is a distributed **version-control system** for tracking changes in source code during software development. It is designed for coordinating work among programmers, but it can be used to track changes in **any set of files**. Its goals include speed, data integrity, and support for distributed, non-linear workflows.

- **Git** was created by **Linus Torvalds** in 2005 for development of the Linux kernel, with other kernel developers contributing to its initial development. Its current maintainer since 2005 is **Junio Hamano**. As with most other distributed version-control systems, and unlike most client–server systems, **every Git directory** on **every computer** is a **full-fledged repository** with complete history and full version-tracking abilities, independent of network access or a central server. Git is free and open-source software distributed under the terms of the GNU General Public License version 2.

Read more on https://en.wikipedia.org/wiki/Git

## Transport commands

```mermaid
sequenceDiagram
  participant W as Workspace
  participant I as Index
  participant L as Local Repository
  participant R as Remote
  W ->> I: add
  I ->> L: commit
  W ->> L: commit -a
  L ->> R: push
  R ->> W: pull / rebase
  L ->> W: checkout HEAD
  I ->> W: checkout
  L ->> W: diff HEAD
  I ->> W: diff
```
