import { lazy } from "react";

export const About = lazy(() => import("../Pages/User/About/About"));
export const Theaters = lazy(() => import("../Pages/User/Theaters/Theaters"));
export const Theater = lazy(() => import("../Pages/User/Theater/Theater"));
export const Refund = lazy(() => import("../Pages/User/Refund/Refund"));
export const PrivacyPolicy = lazy(
  () => import("../Pages/User/PrivacyPolicy/PrivacyPolicy")
);
