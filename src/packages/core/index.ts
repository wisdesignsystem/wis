import "wis/gray";
import "wis/theme";

import "./wis.css";
import { getSymbioteElement, isElement, matchElement } from "./matchElement";
import MountElementContext, {
  useGetMountElement,
  useSetMountElement,
} from "./mountElementContext";
import ComponentTypeContext from "./componentTypeContext";

export {
  isElement,
  matchElement,
  getSymbioteElement,
  MountElementContext,
  useGetMountElement,
  useSetMountElement,
  ComponentTypeContext,
};
