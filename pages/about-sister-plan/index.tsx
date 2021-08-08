import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styled from "styled-components";

export default function Home() {

  return (
    <div className="container">
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="sisterでお姉さんになってみよう" />
        <meta name="twitter:description" content="sisterでお姉さんとして相談を受けたり、技術を教えてみたりしてみませんか？" />
        <meta name="twitter:image" content="https://sister-prod.s3-ap-northeast-1.amazonaws.com/background+with+whiteback_2+(1).png" />
        <meta property="og:url" content="sisterwith.com" />
        <meta property="og:description" content="sisterでお姉さんとして相談を受けたり、技術を教えてみたりしてみませんか？" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="sisterでお姉さんになってみよう" />
        <meta property="og:image" content="https://sister-prod.så3-ap-northeast-1.amazonaws.com/background+with+whiteback_2+(1).png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="main-head">
          <h1 className="main-title">
          <Link href="/"><StyledLink >sister</StyledLink></Link>
          </h1>
        </div>
        <div className="main-contents">
          <Link href="/"><NormalLink>トップページに戻る</NormalLink></Link>
          <p className="center-msg"> すでに登録されている方はこちらから<a href="https://app.sisterwith.com/users/sign_in" className="normal-link">ログイン</a>してください！</p>
          <div className="main-detail">
            <h2 className="title">お姉さんになってみない？</h2>
            <hr />
            <div className="main-buttons">
              <a href="https://app.sisterwith.com/users/sign_up" className="btn--main-color">お姉さんになってみる</a>          
            </div>
            <div className="main-detail-block about-sister-block">
              <div className="about-sister-image">
                <Image src="/img/big-sister.png" alt="一歩踏み出す" height={'600'} width={'200'}/>
              </div>
              <div className="main-about-sister">
                <div>
                  <p className="sub-title">気軽にメンターに挑戦</p>
                  <p className="detail-block">
                    シスタープランは最低500円から作成できます。
                    <br /><br />
                    女性はジェンダーバイアスから、自信がない方が多いということが、いろんな調査からわかっているそうです。
                    <br /><br />
                    sisterでは自信がない中でも、ハードルを極力下げてメンターではなくお姉さんの立場から相談に乗ったり、教えたりすることに挑戦することができます。
                  </p>
                </div>
                <hr />
                <div>
                  <p className="sub-title">自由に料金・内容を設定</p>
                  <p className="detail-block">
                    あなたの経験や、キャリア、スキルなどをもとに、自由にシスタープランを作成することができます。料金も自由に設定可能です。あなたの経験はきっと誰かの背中を押すきっかけとなります。                  </p>
                </div>
                <hr />
                <div>
                  <p className="sub-title">空いた時間を有効活用</p>
                  <p className="detail-block">
                    シスタープランは自分のタイミングで設定ができるので、空いた時間にサポートすることができます。基本的にはチャットツールやsister上のDMでやり取りするため、スマホやPC１台で場所を問わず、サポートできます。もちろん、収入にもつながります。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="main-detail">
          <h2 className="title">お姉ちゃんのなり方</h2>
          <div className="main-detail-block">
            <div className="main-step-contents">
              <div className="image">
                <Image src="/img/about-sister-plan1.png" alt="登録する" height={'210'} width={'320'} />
                </div>
              <p className="sub-title">プロフィール登録</p>
              <p className="detail-block">
                あなたがどんな人かわかるように、自分のプロフィールを充実させよう
              </p>
            </div>
            <div className="main-step-contents">
              <div className="image">
                <Image src="/img/about-sister-plan2.png" alt="探す" height={'210'} width={'320'} />
              </div>
              <p className="sub-title">本人確認</p>
              <p className="detail-block">
                金銭のやり取りはStripeが管理します。プラン作成前にStripeと連携し、本人確認を実施しましょう。
                <br /><br />
                Stripe連携手順は<a href="https://help.sisterwith.com/Stripe-7b325f19b03d457297b999063f4d7447" className="normal-link">こちら</a>
              </p>
            </div>
            <div className="main-step-contents">
              <div className="image">
                <Image src="/img/about-sister-plan3.png" alt="教えてもらう" height={'210'} width={'320'} />
              </div>
              <p className="sub-title">シスタープラン作成</p>
              <p className="detail-block">
                自分がシェアしたり、教えられるプランを作成してみましょう。プラン内容は自由です。
                <br /><br />
                シスタープラン作成手順は<a href="https://help.sisterwith.com/6a49771d0f3e416496b2313dd6f686de" className="normal-link">こちら</a>
              </p>
            </div>
            <div className="main-step-contents">
              <div className="image">
                <Image src="/img/about-sister-plan4.png" alt="教える" height={'210'} width={'320'} />
              </div>
              <p className="sub-title">契約・教える</p>
              <p className="detail-block">
                事前にコミュニケーションをとり、合意を得た上で契約しましょう。
                <br /><br />
                契約完了後はガイドラインに沿って、コミュニケーションツールを利用して、相談に乗ったり教えたりしましょう。
              </p>
            </div>
          </div>
          </div>
          <hr />
          <div className="center-msg">
            <p className="sub-title">＼ お姉さんになってみよう ／</p>
            <p className="detail-block">
              sister（シスター）は正式リリースしたばかりです！<br />
              そのため、お姉さんになっていただける方を大募集中です。<br />
              ぜひ、sisterでお姉さんとして相談を受けたり、技術を教えてみたりしてみませんか？
              <br /><br />
              女性も自由に選択し、自由に生きていけるような時代に変わっていく中で、<br />
              女性が自分に自信を持ち、メンターをやってもいいんだと思えるような環境を<br />
              sisterが提供できればと思っています！！
            </p>
            <div className="main-buttons">
              <a href="https://app.sisterwith.com/users/sign_up" className="btn--main-color">お姉さんになってみる</a>
            </div>
            <p className="center-msg"> すでに登録されている方はこちらから<a href="https://app.sisterwith.com/users/sign_in" className="normal-link">ログイン</a>してください！</p>
            <Link href="/"><NormalLink>トップページに戻る</NormalLink></Link>
          </div>
      </main>
      <footer>
        <ul>
          <li><a href="https://help.sisterwith.com/a9be32b8eae443d3842a0768dc63cd5b" target="_blank" rel="noreferrer">問い合わせ</a></li>
          <li><a href="https://help.sisterwith.com/9bc05557623e46feba3d80e675c0166d" target="_blank" rel="noreferrer">よくある質問</a></li>
          <li><a href="https://help.sisterwith.com/sister-e9f876bfd07d4e4c91bcd8e3b0935134" target="_blank" rel="noreferrer">sisterのガイドライン</a></li>
          <li><a href="https://app.sisterwith.com/kiyaku" target="_blank" rel="noreferrer">利用規約</a></li>
          <li><a href="https://app.sisterwith.com/syohyo" target="_blank" rel="noreferrer">特定商取引法に基づく表記</a></li>
          <li><a href="https://app.sisterwith.com/privacy" target="_blank" rel="noreferrer">プライバシーポリシー</a></li>
        </ul>
      </footer>

      <style jsx>
        {`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .main-head{
          height: 300px;
          width: 100%;
          min-height: 100vh;
          background: url('/img/top.png') no-repeat center center;
          background-size: auto 700px;
          display: flex;
          justify-content: center;
          align-items: flex-end;
        }

        .main-contents{
          width: 90%;
          margin: 0 auto;
          text-align: center;
        }

        .main-message{
          display: flex;
          width: 70%;
          margin:0 auto;
        }

        .main-detail{
          width: 90%;
          margin: 0 auto;
        }

        .main-detail-block{
          display: flex;
          width: 100%;
        }

        .about-sister-block{
          width: 70% !important;
          margin:0 auto !important;
        }

        .main-detail-contents{
          width: calc(100%/3);
          margin: 10px 15px;
        }

        .main-about-sister{
          width: 70%;
        }

        .about-sister-image{
          width: 30%;
        }

        .main-step-contents{
          width: calc(100%/4);
          margin: 10px 15px;
        }

        .image{
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .center-msg{
          text-align: center;
        }

        .main-buttons{
          margin: 50px  0;
          text-align: center;
        }

        .normal-link{
          color: rgba(255, 153, 0, 0.8);
          font-weight: bold;
        }
        .normal-link:hover{
          line-color: rgb(255, 153, 0, 1);
        }

        hr{
          width: 30%;
          margin: 50px auto;
          background-color: rgba(181, 158, 151, 1);
        }

        footer {
          width: 100%;
          height: 200px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: rgba(181, 158, 151, 1);
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        ul {
          list-style: none;
          padding-left: 0;
        }

        .btn--main-color {
          display: inline-block;
          padding: 10px 30px;
          margin-bottom: 10px;
          border-radius: 25px;
          text-decoration: none;
          color: #FFF ;
          background-color: rgba(181, 158, 151, 0.8);
          transition: .4s;
        }

        .btn--main-color:hover {
          background-color: rgba(181, 158, 151, 1);
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          line-height: 1.15;
          font-size: 4rem;
          color: rgb(181, 158, 151);
          text-shadow:0 0 20px #FFF;
        }

        .sub-title{
          line-height: 1.15;
          font-size: 2rem;
          font-weight: bold;
          color: rgb(181, 158, 151);
        }

        .main-title {
          line-height: 1.15;
          font-size: 6rem;
          color: rgb(181, 158, 151);
          text-shadow:0 0 20px #FFF;
        }

        .title,
        .description {
          text-align: center;
        }

        .message-big{
          line-height: 1.15;
          font-size: 2.5rem;
          font-weight: bold;
          color: rgb(181, 158, 151);
        }

        .message-sub{
          font-size: 1rem;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        p{
          color: rgb(102, 102, 102);
        }

        @media screen and (max-width: 959px) {
            .free-room-list{
              @include forms(47%);
            
            }
        }

        @media screen and (max-width: 480px) {
          .main-message{
            display: block;
            width: 100%;
          }

          .message-big{
            font-size: 2rem;
          }

          .main-buttons{
            text-align: center;
          }

          .title{
            font-size: 2.5rem;
          }

          .sub-title{
            font-size: 1.5rem;
          }

          .main-detail-block{
            display: block;
            width: 100% !important;
          }

          .main-detail-contents{
            width: 100%;
            margin: 0 0 50px 0;
          }

          .main-about-sister{
            width: 100%;
          }

          .about-sister-image{
            width: 100%;
            text-align: center;
          }
          .about-sister-image img{
              margin:0 auto;
            }

          hr{
            margin: 30px auto;
          }

          .main-step-contents{
            width: 100%;
            margin: 0 0 50px 0;
          }


        }

      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }

        * {
          box-sizing: border-box;
        }


      `}</style>
    </div>

  );


}

const StyledLink = styled.a`
  line-height: 1.15;
  font-size: 6rem;
  color: rgb(181, 158, 151);
  text-shadow:0 0 20px #FFF;
  cursor: pointer;
`;

const NormalLink = styled.a`
  color: rgba(255, 153, 0, 0.7);
  font-weight: bold;
  cursor: pointer;
  :hover{
    line-color: rgb(255, 153, 0, 1);
  }
}
`;