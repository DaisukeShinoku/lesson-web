import applyCaseMiddleware from "axios-case-converter";
import axios from "axios";

// applyCaseMiddleware:
// axios経由のリクエスト/レスポンスをキャメルケース/スネークケースに変換

const options = {
  ignoreHeaders: true
}

const client = applyCaseMiddleware(axios.create({
  baseURL: "http://localhost:3001/api/v1"
}), options)

export default client;