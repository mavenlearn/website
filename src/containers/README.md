# Container components:

1. Are concerned with how things work.
2. May contain both presentational and container components** inside but usually don’t have any DOM markup of their own except for some wrapping divs, and never have any styles.
3. Provide the data and behavior to presentational or other container components.
4. Call Flux actions and provide these as callbacks to the presentational components.
5. Are often stateful, as they tend to serve as data sources.
6. Are usually generated using higher order components such as connect() from React Redux, createContainer() from Relay, or Container.create() from Flux Utils, rather than written by hand.

Examples: UserPage, FollowersSidebar, StoryContainer, FollowedUserList.
