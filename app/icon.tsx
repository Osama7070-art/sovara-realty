import { ImageResponse } from "next/og";

export const size = {
  width: 512,
  height: 512,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#171717",
          borderRadius: 90,
        }}
      >
        <div
          style={{
            color: "#D4B98F",
            fontSize: 330,
            fontFamily: "serif",
            fontWeight: 700,
            lineHeight: 1,
          }}
        >
          S
        </div>
      </div>
    ),
    size
  );
}
