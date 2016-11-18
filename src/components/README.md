# Presentational components:

1. Are concerned with how things look.
2. May contain both presentational and container components** inside, and usually have some DOM markup and styles of their own.
3. Often allow containment via this.props.children.
4. Have no dependencies on the rest of the app, such as Flux actions or stores.
5. Don’t specify how the data is loaded or mutated.
6. Receive data and callbacks exclusively via props.
7. Rarely have their own state (when they do, it’s UI state rather than data).
8. Are written as functional components unless they need state, lifecycle hooks, or performance optimizations.

Examples: Page, Sidebar, Story, UserInfo, List.
