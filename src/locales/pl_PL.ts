import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const pl_PL: LocaleDefinition = {
  firstNamesMale: [
    'Jan', 'Andrzej', 'Piotr', 'Krzysztof', 'Stanisław', 'Tomasz', 'Paweł', 'Józef',
    'Marcin', 'Michał', 'Grzegorz', 'Jerzy', 'Tadeusz', 'Adam', 'Łukasz', 'Zbigniew',
    'Ryszard', 'Kazimierz', 'Marek', 'Mateusz', 'Kamil', 'Jakub', 'Robert', 'Rafał',
    'Wojciech', 'Sławomir', 'Dariusz', 'Dawid', 'Bartosz', 'Kacper', 'Filip', 'Igor'
  ],
  firstNamesFemale: [
    'Maria', 'Anna', 'Katarzyna', 'Małgorzata', 'Agnieszka', 'Barbara', 'Ewa', 'Krystyna',
    'Elżbieta', 'Zofia', 'Teresa', 'Joanna', 'Magdalena', 'Monika', 'Jadwiga', 'Danuta',
    'Irena', 'Halina', 'Helena', 'Beata', 'Aleksandra', 'Natalia', 'Dorota', 'Paulina',
    'Sylwia', 'Iwona', 'Jolanta', 'Renata', 'Karolina', 'Weronika', 'Julia', 'Martyna'
  ],
  lastNames: [
    'Nowak', 'Kowalski', 'Wiśniewski', 'Dąbrowski', 'Lewandowski', 'Wójcik', 'Kamiński',
    'Kowalczyk', 'Zieliński', 'Szymański', 'Woźniak', 'Kozłowski', 'Jankowski', 'Wojciechowski',
    'Kwiatkowski', 'Kaczmarek', 'Mazur', 'Krawczyk', 'Piotrowski', 'Grabowski', 'Nowakowski',
    'Pawłowski', 'Michalski', 'Nowicki', 'Adamczyk', 'Dudek', 'Zając', 'Wieczorek', 'Jabłoński'
  ],
  streets: [
    'ulica Główna', 'ulica Kwiatowa', 'ulica Słoneczna', 'ulica Polna', 'ulica Leśna',
    'ulica Krótka', 'ulica Długa', 'ulica Szkolna', 'ulica Kościelna', 'ulica Parkowa',
    'Plac Wolności', 'Aleja Solidarności', 'ulica 3 Maja', 'ulica Piłsudskiego',
    'ulica Mickiewicza', 'ulica Słowackiego', 'ulica Kopernika', 'ulica Chopina'
  ],
  cities: [
    'Warszawa', 'Kraków', 'Łódź', 'Wrocław', 'Poznań', 'Gdańsk', 'Szczecin', 'Bydgoszcz',
    'Lublin', 'Białystok', 'Katowice', 'Gdynia', 'Częstochowa', 'Radom', 'Sosnowiec',
    'Toruń', 'Kielce', 'Gliwice', 'Zabrze', 'Bytom', 'Olsztyn', 'Bielsko-Biała',
    'Rzeszów', 'Ruda Śląska', 'Rybnik', 'Tychy', 'Dąbrowa Górnicza', 'Płock', 'Elbląg'
  ],
  states: [
    'Mazowieckie', 'Śląskie', 'Wielkopolskie', 'Małopolskie', 'Dolnośląskie', 'Łódzkie',
    'Pomorskie', 'Kujawsko-Pomorskie', 'Zachodniopomorskie', 'Lubelskie', 'Podkarpackie',
    'Warmińsko-Mazurskie', 'Świętokrzyskie', 'Podlaskie', 'Opolskie', 'Lubuskie'
  ],
  zipCodePattern: '##-###',
  jobTitles: [
    'Inżynier Oprogramowania', 'Kierownik Projektu', 'Analityk Danych', 'Kierownik Marketingu',
    'Przedstawiciel Handlowy', 'Księgowy', 'Kierownik HR', 'Projektant', 'Kierownik Operacyjny',
    'Analityk Biznesowy', 'Kierownik Produktu', 'Administrator Systemu', 'Inżynier Jakości'
  ],
  departments: [
    'Inżynieria', 'Marketing', 'Sprzedaż', 'Zasoby Ludzkie', 'Finanse', 'Operacje',
    'Obsługa Klienta', 'IT', 'Badania i Rozwój', 'Prawny', 'Administracja'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const number = Random.int(1, 150);
    const apartment = Random.int(1, 80);
    return `${street} ${number}/${apartment}, ${zipCode} ${city}, woj. ${state}`;
  },

  generateZipCode(): string {
    const part1 = String(Random.int(10, 99));
    const part2 = String(Random.int(100, 999));
    return `${part1}-${part2}`;
  }
};