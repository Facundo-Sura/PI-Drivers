import style from "./Video.module.css";

export default function Background() {
  return (
    <video
      className={style.video}
      muted
      autoPlay
      loop
      src="./background.mp4"
    ></video>
  );
}
