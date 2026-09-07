import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#ffffff",
          display: "flex",
          alignItems: "center",
          paddingLeft: 90,
          paddingRight: 90,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            width: 360,
            height: 360,
            background: "#000",
            borderRadius: 80,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: 180,
            fontWeight: 800,
            marginRight: 56,
          }}
        >
          C+
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 72, fontWeight: 800, color: "#000", letterSpacing: -2 }}>
            One Clinic
          </div>
          <div style={{ fontSize: 28, color: "#4b5563", marginTop: 12 }}>
            Clinic management software
          </div>
          <div style={{ fontSize: 28, color: "#4b5563", marginTop: 6 }}>
            OnePath Solutions
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
