

// export const useStudents = () => useState<Array<Student>>(
// 'students',
// () => [
//     { 'Numer Albumu': '12345', 'Imie Nazwisko': 'John Doe', kierunek: 'Computer Science', semester: '3',specjalizacja:'Front End' ,'Numer Telefonu':'756489756',pesel:'0231188759905'},
//     { 'Numer Albumu': '54321', 'Imie Nazwisko': 'Jane Doe', kierunek: 'Mathematics', semester: '2',specjalizacja:'Front End','Numer Telefonu':'752487756',pesel:'0237512759905' },
//     { 'Numer Albumu': '67890', 'Imie Nazwisko': 'Jim Smith', kierunek: 'Physics', semester: '4',specjalizacja:'Front End','Numer Telefonu':'756489756',pesel:'794688759905' }
// ]

// );

export const useStudents = () => {
    const students = useState('students', () => [
        { 'Numer Albumu': '12345', 'Imie Nazwisko': 'John Doe', kierunek: 'Computer Science', semester: '3',specjalizacja:'Front End' ,'Numer Telefonu':'756489756',pesel:'0231188759905'},
        { 'Numer Albumu': '54321', 'Imie Nazwisko': 'Jane Doe', kierunek: 'Mathematics', semester: '2',specjalizacja:'Front End','Numer Telefonu':'752487756',pesel:'0237512759905' },
        { 'Numer Albumu': '67890', 'Imie Nazwisko': 'Jim Smith', kierunek: 'Physics', semester: '4',specjalizacja:'Front End','Numer Telefonu':'756489756',pesel:'794688759905' }
    ]);

    const addStudent = (newStudent: Student) => {
        students.value.push(newStudent);
    };

    const removeStudent = (index: number) => {
        students.value.splice(index, 1);
    };

    return {
        students,
        addStudent,
        removeStudent,
    };
};


interface Student {
    'Numer Albumu': string;
    'Imie Nazwisko': string;
    kierunek: string;
    semester: string;
    specjalizacja: string;
    'Numer Telefonu':string;
    pesel:string;
}
