import { Injectable, signal, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DOCUMENT } from '@angular/common';

type ThemeMode = 'dark' | 'light';
type LanguageMode = 'en' | 'ar';

@Injectable({ providedIn: 'root' })
export class SiteSettingsService {
  private readonly document = inject(DOCUMENT);
  private readonly localStorage = this.document.defaultView?.localStorage;

  readonly theme = signal<ThemeMode>(this.getSavedTheme());
  readonly lang = signal<LanguageMode>(this.getSavedLanguage());

  constructor(private translate: TranslateService) {
    // Set default language and use saved language
    this.translate.setDefaultLang('en');
    this.translate.use(this.lang());

    // Apply saved theme to document
    this.applyTheme(this.theme());
  }

  private applyTheme(theme: ThemeMode): void {
    const htmlElement = this.document.documentElement;
    if (theme === 'dark') {
      htmlElement.classList.remove('light');
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
      htmlElement.classList.add('light');
    }
  }

  private getSavedTheme(): ThemeMode {
    return (this.localStorage?.getItem('theme') as ThemeMode) || 'dark';
  }

  private getSavedLanguage(): LanguageMode {
    return (this.localStorage?.getItem('language') as LanguageMode) || 'en';
  }

  private saveTheme(theme: ThemeMode): void {
    this.localStorage?.setItem('theme', theme);
  }

  private saveLanguage(lang: LanguageMode): void {
    this.localStorage?.setItem('language', lang);
  }

  toggleTheme(): void {
    this.theme.update((mode) => {
      const newMode = mode === 'dark' ? 'light' : 'dark';
      this.saveTheme(newMode);
      this.applyTheme(newMode);
      return newMode;
    });
  }

  toggleLanguage(): void {
    this.lang.update((currentLang) => {
      const newLang = currentLang === 'en' ? 'ar' : 'en';
      this.saveLanguage(newLang);
      this.translate.use(newLang);
      return newLang;
    });
  }

  get currentLang(): string {
    return this.translate.currentLang || 'en';
  }
}
