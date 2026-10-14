import type { Metadata } from "next";
import { ICON, bilingual, innerHero, photo } from "@/components/ui";
import {
  ModalTrigger,
  ModalClose,
  Modal,
  DemoForm,
  FormNote,
} from "@/components/interactive";
import data_admission from "@/data/admission.json";
import { textMap, slotMap } from "@/lib/content";
import ExtraImages from "@/components/ExtraImages";

export function generateMetadata(): Metadata {
  const { title, description } = data_admission.meta[0];
  return { title, description };
}

const txt = textMap(data_admission.texts);
const imgs = slotMap(data_admission.images);

export default function AdmissionPage() {
  const courses = data_admission.courses;
  const steps = data_admission.steps;

  return (
    <>
      <ExtraImages items={data_admission.extras} after={0} />
      {innerHero({
        eyebrow_en: txt.t1.en,
        eyebrow_bn: txt.t1.bn,
        title_en: txt.t2.en,
        title_bn: txt.t2.bn,
        desc_en: txt.t3.en,
        desc_bn: txt.t3.bn,
      })}
      <ExtraImages items={data_admission.extras} after={1} />

      <section className="section-pad">
        <div className="wrap grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="eyebrow">{bilingual(txt.t5.en, txt.t5.bn)}</span>
            <h2 className="font-display text-3xl mt-4 text-green-900 font-medium">
              {bilingual(txt.t6.en, txt.t6.bn)}
            </h2>
            <p className="mt-5 text-charcoal-700 leading-relaxed lang-en">
              {txt.t4.en}
            </p>
            <p className="mt-5 text-charcoal-700 leading-relaxed lang-bn">
              {txt.t4.bn}
            </p>
            <div className="flex flex-wrap gap-4 mt-7">
              <a href="#" className="btn btn-outline-dark">
                {ICON.download} {bilingual(txt.t7.en, txt.t7.bn)}
              </a>
              <ModalTrigger modal="registerModal" className="btn btn-primary">
                {bilingual(txt.t8.en, txt.t8.bn)}
              </ModalTrigger>
            </div>
          </div>
          <div>
            {photo(imgs.i1, "Students in class — placeholder", "aspect-[4/3]")}
          </div>
        </div>
      </section>
      <ExtraImages items={data_admission.extras} after={2} />

      <section className="section-pad bg-cream-100">
        <div className="wrap">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="eyebrow justify-center">
              {bilingual(txt.t9.en, txt.t9.bn)}
            </span>
            <h2 className="font-display text-3xl mt-4 text-green-900 font-medium">
              {bilingual(txt.t10.en, txt.t10.bn)}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((c, __i) => (
              <div key={__i} className="card p-6 text-center motif-corner">
                <h3 className="font-display text-lg text-green-900">
                  <span className="lang-en">{c.en}</span>
                  <span className="lang-bn">{c.bn}</span>
                </h3>
                <p className="text-xs text-charcoal-500 mt-2 lang-en">
                  {txt.t11.en}
                </p>
                <p className="text-xs text-charcoal-500 mt-2 lang-bn">
                  {txt.t11.bn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ExtraImages items={data_admission.extras} after={3} />

      <section className="section-pad">
        <div className="wrap">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="eyebrow justify-center">
              {bilingual(txt.t12.en, txt.t12.bn)}
            </span>
            <h2 className="font-display text-3xl mt-4 text-green-900 font-medium">
              {bilingual(txt.t13.en, txt.t13.bn)}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 rounded-full bg-green-900 text-gold-300 font-display text-lg flex items-center justify-center mx-auto">
                  {i + 1}
                </div>
                <p className="mt-4 text-sm text-charcoal-700 leading-relaxed lang-en">
                  {s.en}
                </p>
                <p className="mt-4 text-sm text-charcoal-700 leading-relaxed lang-bn">
                  {s.bn}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-14">
            <a href="#" className="btn btn-outline-dark">
              {ICON.download} {bilingual(txt.t14.en, txt.t14.bn)}
            </a>
            <ModalTrigger modal="registerModal" className="btn btn-primary">
              {bilingual(txt.t15.en, txt.t15.bn)}
            </ModalTrigger>
          </div>
        </div>
      </section>
      <ExtraImages items={data_admission.extras} after={4} />

      <Modal
        id="registerModal"
        className="fixed inset-0 z-[70] bg-charcoal-900/60 flex items-start sm:items-center justify-center p-4 py-10 overflow-y-auto"
      >
        <div className="bg-cream-50 w-full max-w-lg rounded-sm shadow-2xl p-6 sm:p-8 motif-corner">
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-display text-xl text-green-900">
              {bilingual(txt.t17.en, txt.t17.bn)}
            </h2>
            <ModalClose aria-label="Close" className="text-charcoal-700">
              {ICON.close}
            </ModalClose>
          </div>
          <p className="text-sm text-charcoal-500 mb-6 lang-en">{txt.t16.en}</p>
          <p className="text-sm text-charcoal-500 mb-6 lang-bn">{txt.t16.bn}</p>
          <DemoForm className="flex flex-col gap-4">
            <div>
              <label className="text-xs font-semibold text-charcoal-700 lang-en">
                {txt.t19.en}
              </label>
              <label className="text-xs font-semibold text-charcoal-700 lang-bn">
                {txt.t19.bn}
              </label>
              <input
                data-autofocus=""
                type="text"
                className="mt-1 w-full border border-charcoal-900/20 rounded-sm px-3 py-2.5 text-sm bg-white"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-charcoal-700 lang-en">
                {txt.t20.en}
              </label>
              <label className="text-xs font-semibold text-charcoal-700 lang-bn">
                {txt.t20.bn}
              </label>
              <select className="mt-1 w-full border border-charcoal-900/20 rounded-sm px-3 py-2.5 text-sm bg-white">
                {courses.map((c, __i) => (
                  <option key={__i}>{c.en}</option>
                ))}
              </select>
            </div>
            <button type="submit" className="btn btn-primary mt-2">
              {bilingual(txt.t21.en, txt.t21.bn)}
            </button>
            <FormNote className="text-sm text-green-800 bg-green-100 rounded-sm px-4 py-3 lang-en">
              {txt.t18.en}
            </FormNote>
            <FormNote className="text-sm text-green-800 bg-green-100 rounded-sm px-4 py-3 lang-bn">
              {txt.t18.bn}
            </FormNote>
          </DemoForm>
        </div>
      </Modal>
      <ExtraImages items={data_admission.extras} after={5} />
    </>
  );
}
