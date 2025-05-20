import { createAsyncThunk } from "@reduxjs/toolkit";
const BASE_URL = import.meta.env.VITE_API_URL;
console.log("BASE_URL:", BASE_URL);

export const getMapData = createAsyncThunk("Map", async () => {
  console.log(BASE_URL);
  const response = await fetch(`${BASE_URL}/api/locations/`, {
    cache: "no-store",
  });
  const data = await response.json();
  return data;
});

export const postData = createAsyncThunk(
  "PostMap",
  async ({ latitude, longitude }: { latitude: number; longitude: number }) => {
    const response = await fetch(`${BASE_URL}/api/locations/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ latitude, longitude }),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(error || "Failed to post location.");
    }

    const data = await response.json();
    return data;
  }
);

export const deleteData = createAsyncThunk(
  "DeleteMap",
  async (locationId: string, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/api/locations/${locationId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const error = await response.text();
        return rejectWithValue(error || "Failed to delete location.");
      }

      const result = await response.json();
      return { id: locationId, message: result.success };
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);

export const patchLocationDescription = createAsyncThunk(
  "PatchLocationDescription",
  async ({
    locationId,
    description,
  }: {
    locationId: string | undefined;
    description: string;
  }) => {
    const response = await fetch(`${BASE_URL}/api/locations/${locationId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ description }),
    });

    console.log(description);
    console.log(JSON.stringify({ description }));
    console.log(response.text());

    if (!response.ok) {
      const error = await response.text();
      throw new Error(error || "Failed to update location.");
    }

    const data = await response.json();
    return data;
  }
);

export const getLocation = createAsyncThunk(
  "GetLocation",
  async (locationId: string | undefined, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/api/locations/${locationId}`, {
        method: "GET",
        cache: "no-store",
      });

      if (!response.ok) {
        const error = await response.text();
        return rejectWithValue(error || "Failed to get location.");
      }

      const result = await response.json();
      return result;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);
