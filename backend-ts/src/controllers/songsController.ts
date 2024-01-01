import { Request, Response } from "express";

export const getSongs = (_req: Request, res: Response): void => {
  res.status(200).json({
    song: "dar o cu"
  });
}

export const uploadSong = (req: Request, res: Response) => {
  if(req.body.song.single === true) {
    
  } else {
    return false;
  }
}

export const editSong = (_req: Request, res: Response) => {

}

export const deleteSong = (_req: Request, res: Response) => {

}