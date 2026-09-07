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
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              background: "#000",
              borderRadius: 18,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: 36,
              fontWeight: 800,
            }}
          >
            C+
          </div>
          <div
            style={{
              fontSize: 32,
              fontWeight: 700,
              color: "#000",
            }}
          >
            One Clinic
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 68,
              fontWeight: 800,
              lineHeight: 1.1,
              color: "#000",
              letterSpacing: -2,
            }}
          >
            Clinic Management Software for Hospitals.
          </div>
          <div style={{ fontSize: 28, color: "#4b5563", maxWidth: 820 }}>
            Modern healthcare operations, scheduling, billing, and patient records — built by OnePath Solutions.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
