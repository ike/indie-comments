# Architecture Document

This document makes several assumptions:

 - The Indie Comments system will be separate from any blogging or web content platform, and will create commentable spaces based on any URL.
 - It is possible to encrypt an IPFS document to store password hashes, email addresses, etc.
 - No backend will exist aside from the IPFS network. All document lookups and identity validation will happen on the client.

             ┌─────────────────────────────┐
             │                             │
             │                             │
             │      ┌──────────────┐       │
             │      │ URL Hash Doc │       │
             │      └──────────────┘       │
             │              ▲              │
             │              │              │
             │              ▼              │
             │     ┌────────────────┐      │
             │     │    PAGE Doc    │      │
             │     │                │      │
             │     │    - roles     │      │
             │     │- page metadata │      │
             │     │  - moderation  │      │
             │     │     config     │      │
             │     │                │      │
             │     └────────────────┘      │
             │                             │
             │                             │
             └─────────────────────────────┘
                            ▲
                 ┌──────────┴───────────────┐
                 ▼                          ▼
      ┌─────────────────────┐    ┌─────────────────────┐
      │                     │    │                     │
      │   ┌─────────────┐   │    │   ┌─────────────┐   │
      │   │ COMMENT Doc │   │    │   │ PERSON Doc  │   │
      │   │             │   │    │   │             │   │
      │   │  - reply?   │   │    │   │   - roles   │   │
      │   └─────────────┘   │    │   └─────────────┘   │
      │          ▲          │    │          ▲          │
      │          │          │    │          │          │
      │          ▼          │    │          ▼          │
      │  ┌───────────────┐  │    │  ┌───────────────┐  │
      │  │   META Doc    │  │    │  │   IDENT Doc   │  │
      │  │               │  │    │  │               │  │
      │  │   - replies   │  │    │  │  - encrypted  │  │
      │  │   - idents    │◀─┼────┼─▶│   - email,    │  │
      │  │ - moderation  │  │    │  │    contact    │  │
      │  │    status     │  │    │  │- password hash│  │
      │  │               │  │    │  │               │  │
      │  └───────────────┘  │    │  └───────────────┘  │
      │                     │    │                     │
      └─────────────────────┘    └─────────────────────┘
