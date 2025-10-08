
import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendMail } from "./mailer";
import express from "express";


export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // Endpoint para receber contato e enviar e-mail
    app.post("/api/contact", async (req, res) => {
      const { name, email, message } = req.body;
      try {
        const to = process.env.GMAIL_USER ?? "";
        if (!to) {
          throw new Error("GMAIL_USER não definido nas variáveis de ambiente");
        }
        await sendMail({
          to,
          subject: `Contato de ${name}`,
          text: `Email: ${email}\nMensagem: ${message}`,
        });
        console.log("E-mail enviado!");
        res.status(200).json({ success: true });
      } catch (err: any) {
        console.log("Erro ao enviar:", err);
        res.status(500).json({ success: false, error: err.message });
      }
    });

  const httpServer = createServer(app);
  return httpServer;
}
