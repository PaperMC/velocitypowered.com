import React from "react"
import Switch from "react-switch"
import {FiMoon, FiSun} from "react-icons/fi";
import {css} from "@emotion/core";

const iconCommonCss = css`
  vertical-align: middle;
  padding-top: 2px;
  padding-left: 6px;
`

export default function ThemeSwitcher({ themeName, setThemeName }) {
  if (typeof themeName === 'undefined') return <></>;
  const checked = themeName === "light"

  function flipTheme() {
    if (themeName === "light") {
      setThemeName("dark")
    } else {
      setThemeName("light")
    }
  }

  return <div>
    <Switch onChange={flipTheme}
            checked={checked}
            offColor={"#222"}
            onColor={"#fff"}
            onHandleColor={"#0288d1"}
            offHandleColor={"#0288d1"}
            uncheckedIcon={
              <FiMoon css={iconCommonCss} />
            }
            checkedIcon={
              <FiSun css={iconCommonCss} color={"#222"} />
            }
    />
  </div>
}