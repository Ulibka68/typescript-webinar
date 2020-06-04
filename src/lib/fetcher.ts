import { City } from '../types/city';
import { Person } from '../types/person';

module.exports = {
    fetchCities(): City[] {
        return [
            {
                id: 1,
                title: 'Moscow'
            },
            {
                id: 2,
                title: 'Moscow'
            }
        ];
    },
    fetchCityById(id) {
        return this.fetchCities().find(e => e.id === id);
    },
    fetchPeople(): Person[] {
        return [
            {
                id: 1,
                name: 'Anton',
                city_id: 2
            },
            {
                id: 2,
                name: 'Ivan',
                city_id: 2
            },
            {
                id: 3,
                name: 'David',
                city_id: 1
            }
        ];
    }
};
