import theme from "tools/theme";

import { css } from "@emotion/native";

import {View, Text} from "react-native";

// import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";

type SelectProps = {
  value: string;
  options: Array<{ value: string; label: string }>;
  onChangeValue?: (v: string) => void;
  className?: string; // for emotion (css props)
};

const Select = ({ value, options, onChangeValue, className }: SelectProps) => {
  return (
    <Text
      style={css`{
        position: "relative",
        display: "flex",
        alignItems: "center",
        ...theme.font14,
        color: theme.purple,
        borderRadius: "6px",
        height: "28px",
        padding: "0 19px 0 10px",
        background: theme.purple_light,
        boxShadow: theme.shadow_purple_input_inset,
      }`}
    >
      <ArrowDropDownRoundedIcon
        style={css`{
          width: "16px",
          height: "100%",
          position: "absolute",
          right: "4px",
          top: "0px",
        }`}
      />
      {options.find((option) => option.value === value)?.label || ""}
      <
        value={value}
        onChange={(e) => onChangeValue?.(e.target.value)}
        style={css`{
          position: "absolute",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          opacity: 0,
          ...theme.cursor(),
        }`}
      >
        {options.map(({ value, label }) => (
          <option value={value} key={value}>
            {label}
          </option>
        ))}
      </Select>
    </Text>
  );
};

export default Select;
