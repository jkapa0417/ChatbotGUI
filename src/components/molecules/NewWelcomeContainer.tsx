import { useTranslation } from 'react-i18next';

const NewWelcomeContainer = () => {
  const { t, i18n } = useTranslation();

  const Starter = () => {
    if (i18n.language === 'ko') {
      return (
        <div className="flex flex-wrap w-full">
          <h1 className="text-[1.5rem] lg:text-[2rem] font-bold w-full">{t('intro_prefix')} <span className="text-[#328E6E]">{t('intro_ko')}</span></h1>
          <h1 className="text-[1.5rem] lg:text-[2rem] font-bold w-full"><span className="text-[#328E6E]">{t('name')}</span>{t('intro_suffix')}</h1>
        </div>
      )
    }
    else {
      return (
        <div className="flex flex-wrap w-full">
          <h1 className="text-[1.5rem] lg:text-[2rem] font-bold w-full">{t('intro_prefix')} <span className="text-[#328E6E]">{t('name')}</span>{t('intro_suffix')}</h1>
          <h1 className="text-[1.5rem] lg:text-[2rem] font-bold w-full">{t('sub_prefix')} <span className="text-[#328E6E]">{t('sub_suffix')}</span></h1>
        </div>
      )
    }
  }


  return (
    <div className="flex flex-wrap gap-8">
      <Starter />
      <div className="flex flex-wrap w-full">
        <h3 className="text-[1.2rem] lg:text-[1.4rem] w-full">{t('subintro_prefix')} <span className="text-[#328E6E]">{t('tech_stack')}</span>{t('subintro_suffix')}</h3>
        <h3 className="text-[1.2rem] lg:text-[1.4rem] w-full">{t('conclusion')}</h3>
      </div>
    </div>
  )
}

export default NewWelcomeContainer