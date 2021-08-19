import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styled from "styled-components";


export default function Home() {

  return (
    <div className="container">
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="あなたのsisterを見つけよう" />
        <meta name="twitter:description" content="sisterを見つけて、いろんなお話をしてみませんか？" />
        <meta name="twitter:image" content="https://sister-prod.s3-ap-northeast-1.amazonaws.com/background+with+whiteback_2+(1).png" />
        <meta property="og:url" content="sisterwith.com" />
        <meta property="og:description" content="sisterを見つけて、いろんなお話をしてみませんか？" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="あなたのsisterを見つけよう" />
        <meta property="og:image" content="https://sister-prod.så3-ap-northeast-1.amazonaws.com/background+with+whiteback_2+(1).png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="main-head">
          <h1 className="main-title">
            sister
          </h1>
        </div>
        <div className="main-contents">
          <div className="main-message">
            <div className="message">
              <p className="message-big">
                もう、悩まなくていい。<br />
                姉妹や仲間を<br />
                ここで見つけよう<br />
              </p>
              <p className="message-sub">
                女性が少ないIT業界だけど、ここで仲間を見つけられる、教えてもらえる。<br />
                安心して、あなたのシスターに技術やキャリアの相談をしよう<br />
              </p>
            </div>
            <div className="main-buttons">
              <a href="https://app.sisterwith.com/users/sign_up" className="btn--main-color">はじめる</a><br />
              <Link href="/about-sister-plan"><StyledLink >お姉さんになる</StyledLink></Link>
              
            </div>
          </div>
            <p className="center-msg"> すでに登録されている方はこちらから<a href="https://app.sisterwith.com/users/sign_in" className="normal-link">ログイン</a>してください！</p>
          <div className="main-detail">
            <h2 className="title">sisterを活用する</h2>
            <hr />
            <div className="main-detail-block">
              <div className="main-detail-contents">
                <div className="image">
                  <Image src="/img/detail-image1.png" alt="sisterを探せる" height={'210'} width={'320'} />
                </div>
                <p className="sub-title">sisterを探せる</p>
                <p className="detail-block">
                  『sister』は女性のロールモデルが少ないIT・Web業界に特化した女性向け(自認も含む)キャリア/スキルシェアサービスです。エンジニアに限らず、IT・Web業界全般を対象としています
                  <br /><br />
                  あなたの「sister」を見つけて、1on1でメンターやコーチングなどをしてもらうこともできます。
                  <br /><br />
                  ※プランは500円〜
                </p>
              </div>
              <div className="main-detail-contents">
                <div className="image">
                  <Image src="/img/detail-image2.png" alt="悩みを相談する" height={'210'} width={'320'} />
                </div>
                <p className="sub-title">悩みを相談する</p>
                <p className="detail-block">
                  女性が少ない業界だからこそ、参考になるキャリアや経験が身近で見つけづらく、悩んだことはないでしょうか？
                  <br /><br />
                  「sister」では、いろんな女性がキャリアや経験をシェアしています。あなたのこれからのヒントとなる、キャリアや経験、ロールモデルがを見つけましょう
                  <br /><br />
                  また、オープンカフェであなたの悩みや話したいことを共有してみましょう    
                </p>
              </div>
              <div className="main-detail-contents">
                <div className="image">
                  <Image src="/img/detail-image3.png" alt="一歩踏み出す" height={'210'} width={'320'} />
                  </div>
                <p className="sub-title">一歩踏み出す</p>
                <p className="detail-block">
                  女性には女性特有のライフステージがあります。その中で、夢をあきらめたり、新しいことに挑戦しにくかったり、いろんなことに悩むことも多いかと思います。
                  <br /><br />
                  「sister」では同じような経験や悩み、それを解決した方法などをシェアすることで、誰かが一歩ふみ出せるよう、背中を押すプラットフォームです。          
                </p>
              </div>
            </div>
          </div>
          <hr />
          <div className="main-detail-block about-sister-block">
            <div className="about-sister-image">
              <Image src="/img/yanger-sister.png" alt="一歩踏み出す" height={'600'} width={'174'}/>
            </div>
            <div className="main-about-sister">
              <p className="sub-title">sisterについて</p>
              <p className="detail-block">
                『sister』は女性のロールモデルが少ないIT・Web業界に特化した女性向けキャリア/スキルシェアサービスです。
                <br /><br />
                女性が少ないIT業界では、キャリアの悩みや、様々なライフステージを迎えるタイミングでの働き方など、身近に相談できる相手が少ないように感じるのではないでしょうか。
                <br /><br />
                「sister」では、心理的ハードルを極力下げ、キャリアや、IT・Web業界で働く上での悩み、結婚妊娠出産を経ての働き方、技術に関するフォローアップなどを、気軽に話せる「sister」がいればいいなという思いで、できたプラットフォームです。
                <br /><br />
                また、「sister」でスキルや技術を身に付け、自信をつけた妹（メンティー）たちが、今度は自分が姉（メンター）として、誰かに勇気や自信を与え、背中を押せるようになれるよう、循環していきたいという思いももっています。
                <br /><br />
                「sister」はご存知の通り、英語で「姉妹」という意味を持っています。上下関係を持たず、姉妹で話をする感覚で、気軽にコミュニケーションを取れたらいいという意味を込めて、「sister」としています。
                <br /><br />
                あなたの「sister」を見つけて、キャリアやスキルの話をしましょう！
              </p>
            </div>
          </div>
        </div>
        <div className="main-detail">
          <h2 className="title">ステップ</h2>
          <div className="main-detail-block">
            <div className="main-step-contents">
              <div className="image">
                <Image src="/img/step-image1.png" alt="登録する" height={'210'} width={'320'} />
                </div>
              <p className="sub-title">登録する</p>
              <p className="detail-block">
                ユーザー登録して、自分のプロフィールを充実させよう 
              </p>
            </div>
            <div className="main-step-contents">
              <div className="image">
                <Image src="/img/step-image2.png" alt="探す" height={'210'} width={'320'} />
              </div>
              <p className="sub-title">探す</p>
              <p className="detail-block">
                いろんなsisterのキャリアやスキル、経験を探してみよう。また、技術を教えてくれるプランなども探せます。
                <br /><br />
                まずは、あなたの気になるsisterを見つけてみよう        
              </p>
            </div>
            <div className="main-step-contents">
              <div className="image">
                <Image src="/img/step-image3.png" alt="教えてもらう" height={'210'} width={'320'} />
              </div>
              <p className="sub-title">教えてもらう</p>
              <p className="detail-block">
                あなたが気になるsisterやプランを見つけたら、気軽にメッセージを送ってみよう。
                <br /><br />
                探している答えが見つかるかもしれない。
              </p>
            </div>
            <div className="main-step-contents">
              <div className="image">
                <Image src="/img/step-image4.png" alt="教える" height={'210'} width={'320'} />
              </div>
              <p className="sub-title">教える</p>
              <p className="detail-block">
                sisterでは気軽にメンターに挑戦できるように、プランの作成は500円〜可能となっています。
                <br /><br />
                今度はあなたが姉になって、自分の経験を話してみましょう
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
              <Link href="/about-sister-plan"><StyledLink >お姉さんになる</StyledLink></Link>
            </div>
            <p className="center-msg"> すでに登録されている方はこちらから<a href="https://app.sisterwith.com/users/sign_in" className="normal-link">ログイン</a>してください！</p>
          </div>
      </main>
      <footer>
        <ul>
         <li><a href="https://cloudy-learning-bc3.notion.site/377afa60e2ce466ca1ba7061da37a633" target="_blank" rel="noreferrer">ご利用ガイド</a></li>
          <li><a href="https://cloudy-learning-bc3.notion.site/a9be32b8eae443d3842a0768dc63cd5b" target="_blank" rel="noreferrer">問い合わせ</a></li>
          <li><a href="https://cloudy-learning-bc3.notion.site/9bc05557623e46feba3d80e675c0166d" target="_blank" rel="noreferrer">よくある質問</a></li>
          <li><a href="https://cloudy-learning-bc3.notion.site/sister-e9f876bfd07d4e4c91bcd8e3b0935134" target="_blank" rel="noreferrer">sisterのガイドライン</a></li>
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
          margin: auto 0;
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
  display: inline-block;
  padding: 10px 30px;
  margin-bottom: 10px;
  border-radius: 25px;
  text-decoration: none;
  color: #FFF ;
  background-color: rgba(181, 158, 151, 0.8);
  transition: .4s;
  cursor: pointer;

  :hover {
    background-color: rgba(181, 158, 151, 1);
  }
`;