module.exports = {
  routes: [
    {
      method: "POST",
      path: "/ai-lincom/chat",
      handler: "ai-lincom.chat",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "GET",
      path: "/ai-lincom/get-session-by-id/:sessionId",
      handler: "ai-lincom.getSessionById",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "DELETE",
      path: "/ai-lincom/delete-session-by-id/:sessionId",
      handler: "ai-lincom.deleteSessionById",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "POST",
      path: "/ai-lincom/clear-all-sessions",
      handler: "ai-lincom.clearAllSessions",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "GET",
      path: "/ai-lincom/get-all-sessions",
      handler: "ai-lincom.getAllSessions",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};