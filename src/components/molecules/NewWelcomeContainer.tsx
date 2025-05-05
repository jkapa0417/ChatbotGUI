import { useTranslation } from 'react-i18next';

const NewWelcomeContainer = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-wrap gap-8">
      <div className="flex flex-wrap w-full">
        <h1 className="text-[1.5rem] lg:text-[2rem] font-bold w-full">{t('intro_prefix')} <span className="text-[#009B00]">{t('name')}</span>{t('intro_suffix')}</h1>
        <h1 className="text-[1.5rem] lg:text-[2rem] font-bold w-full">{t('sub_prefix')} <span className="text-[#009B00]">{t('sub_suffix')}</span></h1>
      </div>
      <div className="flex flex-wrap w-full">
        <h3 className="text-[1.2rem] lg:text-[1.4rem] font-bold w-full">{t('subintro_prefix')} <span className="text-[#009B00]">{t('tech_stack')}</span>{t('subintro_suffix')}</h3>
        <h3 className="text-[1.2rem] lg:text-[1.4rem] font-bold w-full">{t('conclusion')}</h3>
      </div>
    </div>
  )
}

export default NewWelcomeContainer