import { useEffect } from "react";
import { buttonsToString } from "../../utils";

let animationFrame = -1;

// const buttons = [
//   "K1", //0
//   "K2", //1
//   "P1", //2 , etc
//   "P2",
//   "P4",
//   "P3",
//   "K4",
//   "K3",
//   "",
//   "",
//   "",
//   "",
//   "Up",
//   "Dn",
//   "Lt",
//   "Rt",
//   "",
//   "",
//   "",
// ]

const defaultConfig: Gamepad = {
  buttons: [],
  connected: false,
  axes: [],
  hapticActuators: [],
  id: "",
  index: -1,
  mapping: "standard",
  timestamp: 0,
};

type AddEventProps = {
  type: string;
  btn: string;
  timestamp: number;
};

const addEvent = ({ type, btn, timestamp }: AddEventProps) => {
  const event: CustomEvent = new CustomEvent(`gp${type}`, {
    detail: {
      type,
      btn,
      timestamp,
    },
  });
  window.dispatchEvent(event);
};

let pressed: number[] = [];

export const useGamepadEvent = (controller = 0) => {
  useEffect(() => {
    const getUpdates = () => {
      const gamepads = navigator.getGamepads();
      const { buttons, timestamp }: Gamepad =
        gamepads[controller] || defaultConfig;

      buttons.forEach((btn, index) => {
        if (btn.pressed) {
          if (!pressed.includes(index)) {
            pressed.push(index);
            addEvent({
              type: "Down",
              btn: buttonsToString([...buttons]),
              timestamp,
            });
          }
          return;
        }
        if (pressed.includes(index)) {
          pressed = pressed.filter((btn) => btn !== index);
          addEvent({
            timestamp,
            type: "Up",
            btn: buttonsToString([...buttons]),
          });
        }
      });
      animationFrame = requestAnimationFrame(getUpdates);
    };
    getUpdates();
    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [controller]);
};
export default useGamepadEvent;
