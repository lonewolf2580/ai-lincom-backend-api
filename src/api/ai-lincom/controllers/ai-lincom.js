"use strict";

/**
 * A set of functions called "actions" for `ai-lincom`
 */

module.exports = {
  chat: async (ctx) => {
    try {
      const response = await strapi
        .service("api::ai-lincom.ai-lincom")
        .chat(ctx);

      ctx.body = { data: response };
    } catch (err) {
      console.log(err.message);
      throw new Error(err.message);
    }
  },

  getSessionById: async (ctx) => {
    try {
      const response = await strapi
        .service("api::ai-lincom.ai-lincom")
        .getSessionById(ctx);

      ctx.body = { data: response };
    } catch (err) {
      console.log(err.message);
      throw new Error(err.message);
    }
  },

  deleteSessionById: async (ctx) => {
    try {
      const response = await strapi
        .service("api::ai-lincom.ai-lincom")
        .deleteSessionById(ctx);
      ctx.body = { data: response };
    } catch (err) {
      console.log(err.message);
      throw new Error(err.message);
    }
  },

  clearAllSessions: async (ctx) => {
    try {
      const response = await strapi
        .service("api::ai-lincom.ai-lincom")
        .clearAllSessions(ctx);

      ctx.body = { data: response };
    } catch (err) {
      console.log(err.message);
      throw new Error(err.message);
    }
  },

  getAllSessions: async (ctx) => {
    try {
      const response = await strapi
        .service("api::ai-lincom.ai-lincom")
        .getAllSessions(ctx);

      ctx.body = { data: response };
    } catch (err) {
      console.log(err.message);
      throw new Error(err.message);
    }
  },
};