import { useState, FocusEvent } from "react";
import styles from "./Form.module.css";

export const Form = () => {
  const correctOrder = ["satisfaction", "impetus", "previous"];

  const [answerOrder, setAnswerOrder] = useState<string[]>([]);
  const [error, setError] = useState("");

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    if(answerOrder.includes(e.target.id)) {
      return
    } else {
      answerOrder.push(e.target.id)
    }
  }

  const handleSubmit = () => {
    if (answerOrder.toString() !== correctOrder.toString()) {
      setError("回答の順番が違います。最初からやり直してください。");
      setAnswerOrder([]);
      return;
    }

    window.location.href = "/success";
  };

  return (
    <form className={styles.form}>
      <div className={styles.block}>
        <label className={styles.label} htmlFor="impetus">
          今回、イカれたUIを作ろうの会が開催されることを何から見聞きして知りましたか。
        </label>
        <input onFocus={(e) => handleFocus(e)} id="impetus" type="text" />
      </div>
      <div className={styles.block}>
        <label className={styles.label} htmlFor="satisfaction">
          総合的にどのくらい満足していますか
        </label>
        <input onFocus={(e) => handleFocus(e)} id="satisfaction" type="text" />
      </div>
      <div className={styles.block}>
        <label className={styles.label} htmlFor="previous">
          前問のように回答した理由をお書きください。
        </label>
        <input onFocus={(e) => handleFocus(e)} id="previous" type="text" />
      </div>
      {/* <div className={styles.block}>
        <p>またこのセミナーに参加したいと思いますか？</p>
        <div>
          <input id="yes" type="radio" name="rejoin" />
          <label htmlFor="yes">Yes</label>
        </div>
        <div>
          <input id="no" type="radio" name="rejoin" />
          <label htmlFor="no">No</label>
        </div>
      </div>
      <div className={styles.block}>
        <label className={styles.label} htmlFor="name">
          あなたのお名前をお書きください。
        </label>
        <input id="name" type="text" />
      </div>
      <div className={styles.block}>
        <label className={styles.label} htmlFor="email">
          あなたのメールアドレスをお書きください。
        </label>
        <input id="email" type="email" />
      </div>
      <div className={styles.block}>
        <label className={styles.label} htmlFor="request">
          ご意見・ご要望がございましたら、ご自由にお書きください。
        </label>
        <textarea name="" id="request" cols={30} rows={10} />
      </div> */}
      <button type="button" onClick={handleSubmit}>送信</button>
      {error && <p className={styles.error}>{error}</p>}
    </form>
  );
};
