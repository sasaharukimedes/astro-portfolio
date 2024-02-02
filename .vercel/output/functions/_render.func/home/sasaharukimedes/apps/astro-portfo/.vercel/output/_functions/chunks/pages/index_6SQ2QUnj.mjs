/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, h as addAttribute, i as renderHead, j as renderSlot, m as maybeRenderHead, u as unescapeHTML, k as renderComponent } from '../astro_uPTxOzXt.mjs';
import 'kleur/colors';
import 'clsx';
import 'cssesc';
import Iconify from '@iconify/iconify';

const $$Astro$9 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" data-theme="wireframe"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}>${renderHead()}</head><title>${title}</title> ${renderSlot($$result, $$slots["default"])} </html>`;
}, "/home/sasaharukimedes/apps/astro-portfo/src/layouts/Layout.astro", void 0);

const $$Astro$8 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<div class="navbar bg-base-100"> <div class="navbar-start"> <div class="dropdown"> <label tabindex="0" class="btn btn-ghost lg:hidden"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path></svg> </label> <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"> <li><a href="#AboutMe">About Me</a></li> <li><a href="#History">History & Skills</a></li> <li><a href="#Works">Works</a></li> <li><a href="#Contact">Contact</a></li> </ul> </div> <p class="font-bold text-xl m-3">Harukimedes's Portfolio</p> </div> <div class="navbar-end hidden lg:flex"> <ul class="menu menu-horizontal px-1"> <li><a href="#AboutMe">About Me</a></li> <li><a href="#History">History & Skills</a></li> <li><a href="#Works">Works</a></li> <li><a href="#Contact">Contact</a></li> </ul> </div> </div>`;
}, "/home/sasaharukimedes/apps/astro-portfo/src/components/Header.astro", void 0);

const $$Astro$7 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="footer footer-center p-4 bg-base-300 text-base-content"> <aside> <p>Copyright © 2023 - All right reserved by Harukimedes</p> </aside> </footer>`;
}, "/home/sasaharukimedes/apps/astro-portfo/src/components/Footer.astro", void 0);

const $$Astro$6 = createAstro();
const $$Icon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Icon;
  const props = Astro2.props;
  const getIconSvg = async (icon) => {
    await Iconify.loadIcon(icon);
    const iconData = Iconify.getIcon(icon);
    if (!iconData)
      throw new Error(`Icon ${icon} not found`);
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${iconData.left} ${iconData.top} ${iconData.width} ${iconData.height}" fill="none" style="width:100%">` + iconData.body + "</svg>";
  };
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(props.class, "class")}>${unescapeHTML(await getIconSvg(props.icon))}</div>`;
}, "/home/sasaharukimedes/apps/astro-portfo/src/components/Icon.astro", void 0);

const $$Astro$5 = createAstro();
const $$AboutMe = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$AboutMe;
  return renderTemplate`${maybeRenderHead()}<div class="hero mx-auto w-full py-10 min-h-screen bg-base-200"> <div class="hero-content flex-col lg:flex-row"> <div class="tooltip rounded-full w-25 h-25" data-theme="lofi" data-tip="Hi! Welcome to My Portfolio!"> <img src="/icon.gif" class="max-w-sm rounded-full w-25 h-25 ring ring-primary ring-offset-base-100 ring-offset-2" alt="my icon"> </div> <div class="tooltip rounded-full" data-theme="lofi" data-tip="My Github"> <a href="https://github.com/sasaharukimedes"> ${renderComponent($$result, "Icon", $$Icon, { "class": "w-20", "icon": "ri:github-fill" })} </a> </div> <div class="m-5"> <h1 id="AboutMe" class="text-3xl lg:text-5xl font-bold">I'm Harukimedes!</h1> <p class="py-6">
僕のポートフォリオへようこそ！
<br>
僕はハルキメデスと言います。
<br>
1995年に北海道は函館で生まれた、現在28歳です。
<br>
高校までは水泳とハンドボールをずっとやっていました。
<br>
大学では、ゼミに2つ入り「国際政治経済」と「テクノロジーと社会システム」について勉強していました。
<br>
趣味は、ゲーム、映画、漫画、筋トレ、スポーツ、読書、カラオケなどです。
<br>
僕は好奇心が旺盛で、何かしらハマっている対象があります。
        プログラミング活動自体は学生時に少し触っていましたが、チュートリアルを終えた後に特に作りたいものもなく何もしていませんでした。
        しかし、ふと作ってみたいものがひらめいてしまったので再度勉強し直しながら、作ってみた次第です。
<br>
現在は、At coderで緑ランクまで行けるように頑張ってコンテストに参加したり、勉強しているところです。
<br>
もっと自分の作ってみたいものを作ったり、あるいは表現したいものを表現できるように、
<br>
そして人としてもプログラマとしても、スキルアップできるよう転職活動をしてみようと思い、このポートフォリオの作成を始めました。
</p> </div> </div></div>`;
}, "/home/sasaharukimedes/apps/astro-portfo/src/components/AboutMe.astro", void 0);

const $$Astro$4 = createAstro();
const $$Works = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Works;
  return renderTemplate`${maybeRenderHead()}<h1 id="Works" class="flex justify-center m-5 text-3xl lg:text-5xl font-bold">Works</h1> <div class="flex flex-col lg:flex-row mx-auto items-center justify-center"> <div class="card card-compact w-96 bg-base-100 shadow-xl py-5 m-5"> <figure class="px-10 pt-10"><img src="/kotonoha.webp" alt="kotonoha" class="w-30 h-30"></figure> <div class="card-body"> <h2 class="card-title">コトノハ</h2> <p py="2">
“人の目を気にしなくていい自由なSNS” をコンセプトに作成しました。
<br>
Rails x TailwindCSS
        等を使用し作成しています。デプロイはRender.comで行っています。
<br>
良ければユーザー登録して遊んでみてください！
<br>
現在、Rails7 x daisyUI x Hotwireを使っての構成に切り替えて開発中です!
<br>
注:
        Render.comのフリープランのため最初の接続に時間がかかります。ご了承ください。
</p> <div class="card-actions justify-end"> <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"> <a href="https://kotonoha3.onrender.com">Click Me!</a> </button> </div> </div> </div> <div class="card card-compact w-96 bg-base-100 shadow-xl p-5 m-5"> <figure class="px-10 pt-10"><img src="/blog.webp" alt="Blog created by Fresh" class="w-30 h-30"></figure> <div class="card-body"> <h2 class="card-title">My Updating (b)logs</h2> <p py="2">
簡単ですが、自作のブログを作ってみました！（といってもコンセプトは学生時代のままですが。。。）
<br>
Deno という環境と fresh というフレームワークで作成しています。
<br> デプロイもDeno Deploy を用いています。
<br>
microCMS作成した記事を取ってくるようにしています。
<br>
こちらもAstro x Cloud Pagesで作り替えています。<br>
→完了しました！下に貼っておきます！
</p> <div class="card-actions justify-end"> <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"> <a href="https://my-updating-logs.deno.dev/">旧ブログ</a> </button> <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"> <a href="https://my-updating-blogs.pages.dev/">新ブログ</a> </button> </div> </div> </div> <div class="card card-compact w-96 bg-base-100 shadow-xl py-5 m-5"> <figure class="px-10 pt-10"><img src="/portfolio.webp" alt="Portfolio created by Next.js & ChakraUI" class="w-30 h-30"></figure> <div class="card-body"> <h2 class="card-title">My Portfolio (旧)</h2> <p py="2">
自分のプログラミング活動まとめ用にこのポートフォリオを作成しました。
<br>
Typescript x Next.js x ChakraUI を使って作成しています。
<br>
デプロイは、Vercel で行っています。
<br>
Next.js x ChakraUI等触ってみたかったので、作ってみましたがイマイチ開発体験が良くなかったのでAstro x daisyUIでの作り直しをしました。
</p> <div class="card-actions justify-end"> <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"> <a href="https://portfolio-sasaharukimedes.vercel.app/">Click Me!</a> </button> </div> </div> </div> <div class="card card-compact w-96 bg-base-100 shadow-xl py-5 m-5"> <figure class="px-10 pt-10"><img src="/icon.gif" alt="Portfolio created by Astro & daisyUI" class="w-30 h-30"></figure> <div class="card-body"> <h2 class="card-title">This Portfolio</h2> <p py="2">
改めて、自分のプログラミング活動まとめ用にこのポートフォリオを作成しました。
<br>
Astro x TailwindCSS (daisyUI) を使って作成しています。
<br>
デプロイは、Vercel で行っています。
<br>
他の方の記事で読んだところ、Next.js よりも簡単そうで、ChakraUIよりも自由度が高そう (TailwindCSSの方が慣れている) のもあり、
        作り直してみました。
<br>
実際、こちらの方が開発はしやすい実感がありました。SSGに関しては、これからもAstroを使っていこうかなと思っています。(Svelteも気になってます。。。)
</p> </div> </div> </div>`;
}, "/home/sasaharukimedes/apps/astro-portfo/src/components/Works.astro", void 0);

const $$Astro$3 = createAstro();
const $$History = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$History;
  return renderTemplate`${maybeRenderHead()}<h1 id="History" class="flex justify-center m-5 text-3xl lg:text-5xl font-bold">History & Skills</h1> <h1 class="flex justify-center m-5 text-lg lg:text-2xl font-semibold">~Still Learning~</h1> <div class="flex flex-row items-baseline mx-auto py-3 gap-4 max-w-2xl"> <div class="md:text-lg text-sm font-bold">1995.7<br>~2014.3</div> <div class="flex flex-col gap-2"> <div class="text-sm ">北海道、函館市にて誕生。6人家族で、高校卒業まで地元で過ごす。</div> <div class="text-xs flex flex-col gap-1 prose"> <blockquote>
水泳とハンドボールを約10年やる。<br>
友だちと遊んだり、塾に通ったりして過ごしていたが、<br>
田舎の退屈な生活に飽き飽きして、東京に憧れる。
</blockquote> </div> </div> </div> <div class="flex flex-row items-baseline mx-auto py-3 gap-4 max-w-2xl"> <div class="md:text-lg text-sm font-bold">2014.4<br>~2015.3</div> <div class="flex flex-col gap-2"> <div class="text-sm ">東京で1年間浪人生活をする。</div> <div class="text-xs flex flex-col gap-1 prose"> <blockquote>
大学受験に失敗して1年間浪人生活をする。<br>
慣れない土地で、他の友だちが大学生活を謳歌してる中、<br>
どうにかメンタルを保ち、自分を鼓舞して乗り切る。<br>
勉強の面白さにも気づき、勉強の習慣を身につける。
</blockquote> </div> </div> </div> <div class="flex flex-row items-baseline mx-auto py-3 gap-4 max-w-2xl"> <div class="md:text-lg text-sm font-bold">2015.4<br>~2019.3</div> <div class="flex flex-col gap-2"> <div class="text-sm ">明治大学国際日本学部 に進学する。</div> <div class="text-xs flex flex-col gap-1 prose"> <blockquote>
現役生時代に目指していた学部に進学する。<br>
沢山の友人と、素晴らしい先生たちに恵まれる。<br>
大学外でも様々な出会いを経験し、充実した生活をする。
</blockquote> </div> </div> </div> <div class="flex flex-row items-baseline mx-auto py-3 gap-4 max-w-2xl"> <div class="md:text-lg text-sm font-bold">2019.6<br>~2020.12</div> <div class="flex flex-col gap-2"> <div class="text-sm ">フリーターをする。</div> <div class="text-xs flex flex-col gap-1 prose"> <blockquote>
なんとなく就活して、入った会社に違和感を感じて研修を終えてやめる。<br>
コロナ禍もあり、地元に帰ってアルバイトで塾の先生をしたりして過ごす。<br>
自分の将来に思い悩んだりする中で、手に職をつけるための勉強をしようと思ってプログラミングに再度触れる。
</blockquote> </div> </div> </div> <div class="flex flex-row items-baseline mx-auto py-3 gap-4 max-w-2xl"> <div class="md:text-lg text-sm font-bold">2021.1<br>~現在まで</div> <div class="flex flex-col gap-2"> <div class="text-sm">某建材会社に就職する。</div> <div class="text-xs flex flex-col gap-1 prose"> <blockquote>
実家が自営業（建築関係）をしている関係で、東京の関係がある会社で働くことになる。<br>
このままじゃ実家に戻る羽目になると思い、もう一度自分は何がしたいのか考えるようになる。<br>
その中で、作ってみたいものもできたので、働きながら時間を作ってアプリの制作・プログラミングの勉強に取り組む。
</blockquote> </div> </div> </div> <div class="flex flex-row items-baseline mx-auto py-3 gap-4 max-w-2xl"> <div class="md:text-lg text-sm font-bold">2023.12<br>~今後</div> <div class="flex flex-col gap-2"> <div class="text-sm">IT業界に転職する。</div> <div class="text-xs flex flex-col gap-1 prose"> <blockquote>
アプリ、ブログ、ポートフォリオを作成し、これを機に転職しようと考える。<br>
これから、更に技術と知識を身につけたらもっとできることが増えるし、<br>
周りの人のためになるものも作れるかもしれない。<br>
今後も、個人での開発・勉強に取り組み更に良いプログラムを書けるようになる。
</blockquote> </div> <div class="flex gap-3 justify-center items-center md:items-baseline md:flex-row flex-col py-5"> <div class="card w-40 bg-base-100 shadow-lg"> <div class="card-body"> <h2 class="card-title text-lg">Programming Languages</h2> <ul class="list-disc text-sm"> <li>Ruby</li> <li>Javascript</li> <li>Typescript</li> </ul> </div> </div> <div class="card w-40 bg-base-100 shadow-lg"> <div class="card-body"> <h2 class="card-title text-lg">Library & Frameworks</h2> <ul class="list-disc text-sm"> <li>Ruby on Rails</li> <li>React</li> <li>Next.js</li> <li>TailwindCSS</li> <li>ChakraUI</li> <li>daisyUI</li> <li>Deno</li> <li>Fresh</li> <li>Astro</li> </ul> </div> </div> <div class="card w-40 bg-base-100 shadow-lg"> <div class="card-body"> <h2 class="card-title text-lg">Others</h2> <ul class="list-disc text-sm"> <li>HTML</li> <li>CSS</li> <li>Github</li> <li>Render</li> <li>Linux</li> <li>Vercel</li> <li>Cloudflare</li> <li>microCMS</li> </ul> </div> </div> </div> </div> </div>`;
}, "/home/sasaharukimedes/apps/astro-portfo/src/components/History.astro", void 0);

const $$Astro$2 = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${maybeRenderHead()}<h1 id="Contact" class="flex justify-center m-5 text-3xl lg:text-5xl font-bold">Contact</h1> <div class="flex justify-center m-5 font-semibold"> <form action="https://formspree.io/f/xgejdznp" method="POST"> <div class="form-control m-3"> <label class="label"> <span class="label-text">Email</span> </label> <label class="input-group"> <input type="email" name="email" placeholder="info@site.com" class="input input-bordered w-full max-w-xs"> </label> </div> <div class="form-control m-3"> <label class="label"> <span class="label-text">Message</span> </label> <label class="input-group"> <textarea name="message" placeholder="ここに書いてね！" class="textarea textarea-bordered"></textarea> </label> </div> <div class="form-control m-3 "> <button class="btn btn-active btn-xs sm:btn-sm md:btn-md lg:btn-lg" type="submit">Send</button> </div> </form> </div> <!-- <label>
    Your email:
    <input type="email" name="email">
  </label>
  <label>
    Your message:
    <textarea name="message"></textarea>
  </label> --> <!-- your other form fields go here --> <!-- <button type="submit">Send</button> -->`;
}, "/home/sasaharukimedes/apps/astro-portfo/src/components/Contact.astro", void 0);

const $$Astro$1 = createAstro();
const $$Certification = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Certification;
  return renderTemplate`${maybeRenderHead()}<h1 id="History" class="flex justify-center m-5 text-3xl lg:text-5xl font-bold">Certifications</h1> <ul class="flex flex-col list-disc items-center mx-auto py-3 gap-4 max-w-2xl"> <li class="list-inside">英検2級</li> <li class="list-inside">TOEIC 750</li> <li class="list-inside">TOEFL IBT 61</li> <li class="list-inside">Ruby Silver ver.3</li> </ul>`;
}, "/home/sasaharukimedes/apps/astro-portfo/src/components/Certification.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Harukimedes's Portfolio" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main id="index" class="sm:flex-col mx-auto"> ${renderComponent($$result2, "AboutMe", $$AboutMe, {})} ${renderComponent($$result2, "History", $$History, {})} ${renderComponent($$result2, "Works", $$Works, {})} ${renderComponent($$result2, "Certification", $$Certification, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/sasaharukimedes/apps/astro-portfo/src/pages/index.astro", void 0);

const $$file = "/home/sasaharukimedes/apps/astro-portfo/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
