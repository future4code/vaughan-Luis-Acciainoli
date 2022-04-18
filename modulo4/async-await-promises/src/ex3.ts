import axios from "axios"
import { baseURL } from "./baseURL"

const news = {
  title: "Nova notícia",
  content: "conteúdo",
  date: Date.now()
}

const createNews = (news: any) => {}

const getAllSubscribers = () => {}

const getSubscribersIds = (subscribers: any) => {}

const notifyAllSubscribers = () => {}

// createNews(news)                // criar noticia
//   .then(getAllSubscribers)      // buscar assinantes
//   .then(getSubscribersIds)      // extrair id's (etapa síncrona)
//   .then(notifyAllSubscribers)   // enviar notificacoes