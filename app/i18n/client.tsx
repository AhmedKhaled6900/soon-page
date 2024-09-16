
"use client"
// import React, { useEffect, useState } from 'react';
import i18next from 'i18next';
import {
  UseTranslationOptions,
  initReactI18next,
  useTranslation as useTranslationOrg,
} from 'react-i18next';
import { useCookies } from 'react-cookie';
import resourcesToBackend from 'i18next-resources-to-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { getOptions, languages, cookieName } from './settings';
import { useEffect, useState } from 'react';

const runsOnServerSide = typeof window === 'undefined';

// Initialize i18next with type safety
i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(resourcesToBackend((language: string, namespace: string) =>
    import(`./locales/${language}/${namespace}.json`)
  ))
  .init({
    ...getOptions(),
    lng: undefined, // let detect the language on client side
    detection: {
      order: ['path', 'htmlTag', 'cookie', 'navigator'],
    },
    preload: runsOnServerSide ? languages : [],
  });

// Typed version of the useTranslation hook
export function useTranslation(
  lng: string | undefined,
  ns: string,
  options?: UseTranslationOptions<undefined> | string | undefined
) {
  const [cookies, setCookie] = useCookies([cookieName]);
  const ret = useTranslationOrg(ns, options as UseTranslationOptions<undefined>);
  const { i18n } = ret;

  if (runsOnServerSide && lng && i18n.resolvedLanguage !== lng) {
    i18n.changeLanguage(lng);
  } else {
    const [activeLng, setActiveLng] = useState(i18n.resolvedLanguage);

    useEffect(() => {
      if (activeLng !== i18n.resolvedLanguage) {
        setActiveLng(i18n.resolvedLanguage);
      }
    }, [activeLng, i18n.resolvedLanguage]);

    useEffect(() => {
      if (lng && i18n.resolvedLanguage !== lng) {
        i18n.changeLanguage(lng);
      }
    }, [lng, i18n]);

    useEffect(() => {
      if (cookies.i18next !== lng) {
        setCookie(cookieName, lng, { path: '/' });
      }
    }, [lng, cookies.i18next]);
  }

  return ret;
}


 