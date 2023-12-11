    <template>
        <div class="modal" ref="modalRef" id="modal">
        <div class="modal-content">
            <button class="closeButton" @click="closeModal">X</button>
            <span class="close" @click="closeModal"></span>
            <form @submit.prevent="submitForm">
            <label>Nr albumu:</label>
            <input v-model="numerAlbumu" />
            <label>Imię Nazwisko:</label>
            <input v-model="imieNazwisko" />
            <label>Kierunek:</label>
            <input v-model="kierunek" />
            <label>Semestr:</label>
            <input v-model="semester" />
            <label>Specjalizacja:</label>
            <input v-model="specjalizacja" />
            <label>Numer Telefonu:</label>
            <input v-model="numerTelefonu" />
            <label>Pesel:</label>
            <input v-model="pesel" />
    
            <button type="submit" class="submitButton">Dodaj studenta</button>
            </form>
        </div>
        </div>
    </template>

<script setup>

    const numerAlbumu = ref('');
    const imieNazwisko = ref('');
    const kierunek = ref('');
    const semester = ref('');
    const specjalizacja = ref('');
    const numerTelefonu = ref('');
    const pesel = ref('');
    
    const { addStudent } = useStudents();

    function closeModal() {
        const modal = document.getElementById('modal');
        modal.style.display = 'none';
    }
    
    function submitForm() {
        closeModal();
        const newStudent = {
            'Numer Albumu': numerAlbumu.value,
            'Imie Nazwisko': imieNazwisko.value,
            kierunek: kierunek.value,
            semester: semester.value,
            specjalizacja: specjalizacja.value,
            'Numer Telefonu': numerTelefonu.value,
            pesel: pesel.value,
        };
    
        addStudent(newStudent);
        clearForm();
    }
    
    function clearForm() {
        numerAlbumu.value = '';
        imieNazwisko.value = '';
        kierunek.value = '';
        semester.value = '';
        specjalizacja.value = '';
        numerTelefonu.value = '';
        pesel.value = '';
    }
    
    </script>


<style scoped>
    /* modal */
    .modal {
        display: none;
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgb(0,0,0);
        background-color: rgba(0,0,0,0.4);
        padding-top: 60px;
        color:#0068C8;
    }

    .modal-content {
        background-color: #fefefe;
        margin: 5% auto;
        padding: 20px;
        border: 1px solid #888;
        width: 60%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center ;
        height: fit-content;
        position: relative;
    }

    .close {
        color: #aaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
    }

    form{
        width: 90%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center ;
    }

    input{
        border-radius: 15px;
        outline: none;
        border: none;
        padding: 2%;
        color: #2387E4;
        background: #E7EBEF;
        width: 50%;
        height: 25px;
        margin-bottom: 15px;
        text-align: center;
    }

    label{
        margin-bottom: 15px;
    }

    .submitButton{
        border-radius: 20px;
        background: #9EC0E0;
        color: #2387E4;
        width: 164px;
        height: 46px;
        border: none;
    }

    .close:hover,
    .close:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
    }

    .closeButton {
            position: absolute;
            top: 10px;
            right: 10px;
            background-color: #9EC0E0;
            border: none;
            border-radius: 5px;
            padding: 10px;
            color: #2387E4;
            cursor: pointer;
            z-index: 2; 
    }

    @media (max-width:990px){
        .modal-content{
            width: 60%;
        }

        input{
            width:60%;
        }

        .submitButton{
            width: 135px;
            height: 36px;
        }
    }

    @media (max-width:576px){
        .modal-content{
            width: 75%;
        }

        input{
            width:65%;
        }
    }
</style>