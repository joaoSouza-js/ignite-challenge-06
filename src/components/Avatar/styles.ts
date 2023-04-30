import { styled } from "@/styles";
import Image from "next/image";

export const AvatarContainer = styled("div", {
  borderRadius: "$full",
  background: "$gradient-vertical",
  padding: 1,

  variants: {
    size: {
      sm: {
        width: 32,
        minWidth: 32,
        height: 32,
      },
      md: {
        width: 40,
        minWidth: 40,
        height: 40,
      },
      lg: {
        width: 72,
        minWidth: 72,
        height: 72,
      },
    },
    cursorPoint: {
      true: {
        cursor: "pointer",
      },
    },
  },
});

export const AvatarImage = styled(Image, {
  borderRadius: "$full",
  objectFit: "cover",
  width: "100%",
  height: "100%",
});
