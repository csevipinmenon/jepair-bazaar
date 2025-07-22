import { MdLightMode } from "react-icons/md";
import { CiDark } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { useTheme } from "../../context/themecontext";

function ThemeMode() {
  const { themeMode, darkTheme, lightTheme } = useTheme();
  const changeTheme = (e) => {
    if (themeMode == "dark") {
      lightTheme();
    } else {
      darkTheme();
    }
  };
  return (
    <div>
      <button className="text-3xl" onClick={changeTheme}>
        <span>
          {themeMode === "dark" ? (
            <abbr title="light">
              < MdDarkMode className="  hover:text-orange-500 " />{" "}
            </abbr>
          ) : (
            <abbr title="dark">
              {" "}
              <MdLightMode className="text-black hover:text-orange-500 " />
            </abbr>
          )}
        </span>
      </button>
    </div>
  );
}

export default ThemeMode;
