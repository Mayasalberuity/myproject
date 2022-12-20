import { ThirtyFpsSelectRounded } from "@mui/icons-material";
import ApiService from "../components/utils/base-api/api-service";
import fileDownload from 'js-file-download'


class FilesService extends ApiService {
  constructor() {
    super({
      baseURL: `http://localhost/internet-applications/public`,
    });
  }

  getFilesHistory(body) {
    return this.post("/api/getFileHistory", body);
  }

  getReservedFiles() {
    return this.get("/api/getReservedFile");
  }

  handleDownload = (url, filename) => {
    ThirtyFpsSelectRounded.get(url, {
      responseType: 'blob',
    })
    .then((res) => {
      fileDownload(res.data, filename)
    })
  }

  
}

export const filesService = new FilesService();
