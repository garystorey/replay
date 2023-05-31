import { Replay } from "@prisma/client"
import { RefObject, useCallback, useState } from "react"

import { Frame } from "../../types"
import { empty, frameRateFromVideoSpeed, post, toMS } from "../../utils"
import useFrameLoop from "../useFrameLoop"

type UpdateReplayProps = Pick<Replay, "id" | "name" | "description">
type SaveReplayProps = Pick<
  Replay,
  "name" | "description" | "startTs" | "endTs" | "controllerId" | "ownerId"
>

const FRAMES_IN_MS = 16.66667

export type UseReplayProps = {
  rate?: number
  videoRef?: RefObject<HTMLVideoElement>
}

const _addFrame = (replay: Frame[], index: number, frame: Frame): Frame[] => {
  const newFrame: Frame = frame ?? { ...empty() }
  return [...replay.slice(0, index), newFrame, ...replay.slice(index)]
}

export default function useReplay({ rate = 1, videoRef }: UseReplayProps) {
  const [replay, setInternalReplay] = useState<Frame[]>([])
  const [frame, setFrame] = useState<Frame>({ ...data[0] })
  const [index, setIndex] = useState<number>(0)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [frameRate, setFrameRate] = useState<number>(rate)

  const updateFrames = useCallback((frame: Frame, index: number) => {
    setFrame(frame)
    setIndex(index)
  }, [])

  const { restart: restartFrames } = useFrameLoop(updateFrames, replay, isPlaying, frameRate)

  const setReplay = useCallback((frames: Frame[]) => {
    setInternalReplay(frames)
    setFrame(frames[0])
    setIndex(0)
  }, [])

  const restart = useCallback(() => {
    setFrame({ ...replay[0] })
    setIndex(0)
    restartFrames()
    if (videoRef?.current) {
      videoRef.current.currentTime = 0
    }
  }, [replay, restartFrames, videoRef])

  // can this use current from frameloop?
  const rewind = useCallback(
    (numOfFrames: number) => {
      let newIndex = index - numOfFrames
      if (newIndex < 0) newIndex = replay.length - 1

      setFrame({ ...replay[newIndex] })
      setIndex(newIndex)
      if (videoRef?.current) {
        try {
          videoRef.current.currentTime += Math.round(replay[index].frames * FRAMES_IN_MS)
        } catch (e) {
          videoRef.current.currentTime = 0
        }
      }
    },
    [replay, index, videoRef]
  )

  // can this use current from frameloop?
  const forward = useCallback(
    (numOfFrames: number) => {
      let newIndex = index + numOfFrames
      if (newIndex === replay.length) newIndex = 0
      setFrame({ ...replay[newIndex] })
      setIndex(newIndex)
      if (videoRef?.current) {
        try {
          videoRef.current.currentTime += Math.round(replay[index].frames * 16.6666667)
        } catch (e) {
          videoRef.current.currentTime = 0
        }
      }
    },
    [replay, index, videoRef]
  )

  const play = useCallback(() => {
    setIsPlaying(true)
    videoRef?.current?.play()
  }, [setIsPlaying, videoRef])

  const stop = useCallback(() => {
    setIsPlaying(false)
    videoRef?.current?.pause()
  }, [setIsPlaying, videoRef])

  const squabble = useCallback(
    (value: number) => {
      const frameRate = frameRateFromVideoSpeed(value)
      setFrameRate(frameRate)
      if (videoRef && videoRef.current) {
        videoRef.current.playbackRate = value
      }
    },
    [videoRef, setFrameRate]
  )

  const reset = useCallback(() => {
    const updated = [...replay].map((_, i) =>
      i === index ? { ...frame, buttons: 0, frames: 0, description: "" } : _
    )
    setInternalReplay([...updated])
    setFrame({ ...updated[index] })
  }, [frame, index, replay])

  const addFrame = useCallback(() => {
    const updated = _addFrame(replay, index, replay[index])
    setInternalReplay([...updated])
    setFrame({ ...updated[index] })
  }, [index, replay])

  const deleteFrame = useCallback(() => {
    const updated = [...replay].filter((_, i) => i !== index)
    setInternalReplay([...updated])
    setFrame({ ...updated[index] })
  }, [index, replay])

  const updateFrame = useCallback(
    (frame: Frame) => {
      const updated = replay.map((f, i) => (i === index ? frame : f))
      setInternalReplay([...updated])
      setFrame({ ...updated[index] })
    },
    [index, replay]
  )

  const updateReplay = useCallback(
    async (r: UpdateReplayProps) => await post("/api/replay/update", r),
    []
  )

  const saveReplay = useCallback(async (r: SaveReplayProps) => await post("/api/replay/new", r), [])

  const newReplay = useCallback(
    () => ({
      name: "",
      description: "",
      data: [empty()],
      character: {
        game: {
          name: "",
          genre: "",
        },
        characterType: "",
      },
    }),
    []
  )

  return {
    replay,
    index,
    frame,
    frameRate,
    isPlaying,
    setIndex,
    setFrameRate,
    setFrame,
    setReplay,
    rewind,
    restart,
    forward,
    play,
    stop,
    squabble,
    reset,
    addFrame,
    deleteFrame,
    updateFrame,
    saveReplay,
    updateReplay,
    newReplay,
  }
}

const data: Frame[] = [
  {
    buttons: 32,
    frames: 0,
    timestamp: toMS(0),
  },
  {
    buttons: 42,
    frames: 15,
    timestamp: toMS(15),
  },
  {
    buttons: 4098,
    frames: 30,
    timestamp: toMS(30),
  },
  {
    buttons: 258,
    frames: 30,
    timestamp: toMS(30),
  },
  {
    buttons: 1,
    frames: 15,
    timestamp: toMS(15),
  },
  {
    buttons: 4,
    frames: 6,
    timestamp: toMS(6),
  },
  {
    buttons: 1026,
    frames: 9,
    timestamp: toMS(9),
  },
  {
    buttons: 16384,
    frames: 45,
    timestamp: toMS(45),
  },
  {
    buttons: 9,
    frames: 15,
    timestamp: toMS(15),
  },
  {
    buttons: 262,
    frames: 15,
    timestamp: toMS(15),
  },
  {
    buttons: 8,
    frames: 30,
    timestamp: toMS(30),
  },
  {
    buttons: 262,
    frames: 30,
    timestamp: toMS(30),
  },
  {
    buttons: 16384,
    frames: 30,
    timestamp: toMS(30),
  },
  {
    buttons: 1026,
    frames: 30,
    timestamp: toMS(30),
  },
  {
    buttons: 2,
    frames: 15,
    timestamp: toMS(15),
  },
  {
    buttons: 0,
    frames: 3,
    timestamp: toMS(3),
  },
  {
    buttons: 16386,
    frames: 15,
    timestamp: toMS(15),
  },
  {
    buttons: 258,
    frames: 15,
    timestamp: toMS(15),
  },
  {
    buttons: 2,
    frames: 30,
    timestamp: toMS(30),
  },
  {
    buttons: 0,
    frames: 45,
    timestamp: toMS(45),
  },
  {
    buttons: 16386,
    frames: 3,
    timestamp: toMS(3),
  },
  {
    buttons: 258,
    frames: 15,
    timestamp: toMS(15),
  },
  {
    buttons: 0,
    frames: 30,
    timestamp: toMS(30),
  },
  {
    buttons: 16384,
    frames: 15,
    timestamp: toMS(15),
  },
  {
    buttons: 256,
    frames: 30,
    timestamp: toMS(30),
  },
  {
    buttons: 0,
    frames: 30,
    timestamp: toMS(30),
  },
  {
    buttons: 1,
    frames: 30,
    timestamp: toMS(30),
  },
  {
    buttons: 0,
    frames: 48,
    timestamp: toMS(48),
  },
]
