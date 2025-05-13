import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface IGetSearchListProps {
  page: string;
  lang: string;
  searchTerm?: string | null;
}

export const getSearchList = createAsyncThunk("Search", async (props: IGetSearchListProps) => {
  const { page = "1", lang, searchTerm } = props;

  let params = [];
  if (lang) params.push(`lang=${lang}`);
  if (searchTerm) params.push(`searchTerm=${searchTerm}`);

  const response = await axios.get(process.env.REACT_APP_API_URL! + `/Search/${page}${params.length > 0 && `?${params.join("&")}`}`);
  return await response.data;
});
