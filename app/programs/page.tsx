import type { Metadata } from "next";
import { ICON, bilingual, innerHero, photo } from "@/components/ui";
import {
  ModalTrigger,
  ModalClose,
  Modal,
  DemoForm,
  FormNote,
} from "@/components/interactive";
import data_programs from "@/data/programs.json";
import { textMap } from "@/lib/content";
import ExtraImages from "@/components/ExtraImages";

export function generateMetadata(): Metadata {
  const { title, description } = data_programs.meta[0];
  return { title, description };
}

const txt = textMap(data_programs.texts);

export default function ProgramsPage() {
  const programs = data_programs.programs;

  const registerModal = (
    <Modal
      id="registerModal"
      className="fixed inset-0 z-[70] bg-charcoal-900/60 flex items-start sm:items-center justify-center p-4 py-10 overflow-y-auto"
    >
      <div className="bg-cream-50 w-full max-w-lg rounded-sm shadow-2xl p-6 sm:p-8 motif-corner">
        <div className="flex items-center justify-between mb-2">
          <h2 className="font-display text-xl text-green-900">
            {bilingual(txt.t2.en, txt.t2.bn)}
          </h2>
          <ModalClose aria-label="Close" className="text-charcoal-700">
            {ICON.close}
          </ModalClose>
        </div>
        <p className="text-sm text-charcoal-500 mb-6 lang-en">{txt.t1.en}</p>
        <p className="text-sm text-charcoal-500 mb-6 lang-bn">{txt.t1.bn}</p>
        <DemoForm className="flex flex-col gap-4">
          <div>
            <label className="text-xs font-semibold text-charcoal-700 lang-en">
              {txt.t4.en}
            </label>
            <label className="text-xs font-semibold text-charcoal-700 lang-bn">
              {txt.t4.bn}
            </label>
            <input
              data-autofocus=""
              type="text"
              className="mt-1 w-full border border-charcoal-900/20 rounded-sm px-3 py-2.5 text-sm bg-white"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-charcoal-700 lang-en">
                {txt.t5.en}
              </label>
              <label className="text-xs font-semibold text-charcoal-700 lang-bn">
                {txt.t5.bn}
              </label>
              <input
                type="tel"
                className="mt-1 w-full border border-charcoal-900/20 rounded-sm px-3 py-2.5 text-sm bg-white"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-charcoal-700 lang-en">
                {txt.t6.en}
              </label>
              <label className="text-xs font-semibold text-charcoal-700 lang-bn">
                {txt.t6.bn}
              </label>
              <input
                type="email"
                className="mt-1 w-full border border-charcoal-900/20 rounded-sm px-3 py-2.5 text-sm bg-white"
              />
            </div>
          </div>
          <div>
            <label className="text-xs font-semibold text-charcoal-700 lang-en">
              {txt.t7.en}
            </label>
            <label className="text-xs font-semibold text-charcoal-700 lang-bn">
              {txt.t7.bn}
            </label>
            <select className="mt-1 w-full border border-charcoal-900/20 rounded-sm px-3 py-2.5 text-sm bg-white">
              {programs.map((p, __i) => (
                <option key={__i}>{p.en}</option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn btn-primary mt-2">
            {bilingual(txt.t8.en, txt.t8.bn)}
          </button>
          <FormNote className="text-sm text-green-800 bg-green-100 rounded-sm px-4 py-3 lang-en">
            {txt.t3.en}
          </FormNote>
          <FormNote className="text-sm text-green-800 bg-green-100 rounded-sm px-4 py-3 lang-bn">
            {txt.t3.bn}
          </FormNote>
        </DemoForm>
      </div>
    </Modal>
  );

  return (
    <>
      <ExtraImages items={data_programs.extras} after={0} />
      {innerHero({
        eyebrow_en: txt.t9.en,
        eyebrow_bn: txt.t9.bn,
        title_en: txt.t10.en,
        title_bn: txt.t10.bn,
        desc_en: txt.t11.en,
        desc_bn: txt.t11.bn,
      })}
      <ExtraImages items={data_programs.extras} after={1} />

      <section className="section-pad">
        <div className="wrap grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((p, __i) => (
            <div key={__i} className="card overflow-hidden flex flex-col">
              {photo({ src: p.photo }, p.en + " — placeholder", "aspect-[4/3]")}
              <div className="p-5 flex flex-col gap-2 flex-1">
                <h3 className="font-display text-lg text-green-900 leading-snug">
                  <span className="lang-en">{p.en}</span>
                  <span className="lang-bn">{p.bn}</span>
                </h3>
                <p className="text-xs text-charcoal-500">
                  <span className="lang-en">{p.sched_en}</span>
                  <span className="lang-bn">{p.sched_bn}</span>
                </p>
                <p className="text-sm text-charcoal-700 leading-relaxed flex-1">
                  <span className="lang-en">{p.desc_en}</span>
                  <span className="lang-bn">{p.desc_bn}</span>
                </p>
                <ModalTrigger
                  modal="registerModal"
                  className="btn btn-primary btn-sm mt-2 w-fit"
                >
                  {bilingual(txt.t12.en, txt.t12.bn)}
                </ModalTrigger>
              </div>
            </div>
          ))}
        </div>
      </section>
      <ExtraImages items={data_programs.extras} after={2} />
      {registerModal}
      <ExtraImages items={data_programs.extras} after={3} />
    </>
  );
}
