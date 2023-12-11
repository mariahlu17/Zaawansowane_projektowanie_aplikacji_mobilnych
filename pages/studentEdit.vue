<script setup>
const { students,removeStudent }  = useStudents();
const selectedStudent = ref(JSON.parse(localStorage.getItem('selectedStudent')));
const formData = ref({});
const isModalOpen = ref(false);
const isDeleteModalOpen = ref(false);


onMounted(() => {
    selectedStudent.value = JSON.parse(localStorage.getItem('selectedStudent'));
    isModalOpen.value = true;
    isDeleteModalOpen.value = true;
});

function openModal() {
    isModalOpen.value = true;
    const modal = document.getElementById('modal');
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

function openDeleteModal() {
    isDeleteModalOpen.value = true;
    const modalDelete = document.getElementById('deleteModal');
    modalDelete.style.display = 'flex';
}

function closeDeleteModal() {
    const modalDelete = document.getElementById('deleteModal');
    modalDelete.style.display = 'none';
}

function submitForm() {
    selectedStudent.value = { ...selectedStudent.value, ...formData.value };

    const studentIndex = students.value.findIndex(student => student['Numer Albumu'] === selectedStudent.value['Numer Albumu']);

    if (studentIndex !== -1) {
        students.value.splice(studentIndex, 1, selectedStudent.value);
    }
    closeModal();
}

function goToHomePage() {
    navigateTo('/home');
}


function confirmDelete() {
    if (selectedStudent.value) {
        const studentIndex = students.value.findIndex(student => student['Numer Albumu'] === selectedStudent.value['Numer Albumu']);

        if (studentIndex !== -1) {
            removeStudent(studentIndex);
            closeDeleteModal();
            goToHomePage();
        }
    }
}
</script>

<template>
    <div class="studentEdit_content">
        <main class="studentEdit_main">
        <section class="studentInfoEdit" v-if="selectedStudent">
            <img src="~assets/student_logo.png" alt="">
            <div class="infoBox" v-for="(value, key) in selectedStudent" :key="key">
                <p>{{ key }}: {{ value }}</p>
                <button @click="openModal"><img src="~assets/edit_logo.png" alt=""></button>
            </div>
            </section>
        </main>
        <!-- Modal for edit-->
        <div v-if="isModalOpen" class="modal" ref="modalRef" id="modal">
        <div class="modal-content">
            <button class="closeButton" @click="closeModal">X</button>
            <span class="close" @click="closeModal"></span>
            <form @submit.prevent="submitForm">
            <div class="infoBox infoBoxModal" v-for="(value, key) in selectedStudent" :key="key">
                <label>{{ key }}:</label>
                <input v-if="key !== 'Numer Albumu'" v-model="formData[key]" />
            </div>
            <button type="submit" class="submitButton">Zapisz zmiany</button>
            </form>
            </div>
        </div>
        <!-- /Modal -->

        <!-- Modal for Delete Confirmation -->
        <div v-if="isDeleteModalOpen" class="modal-delete" ref="deleteModalRef" id="deleteModal">
            <div class="modal-delete-content">
                <h1>Napewno chcesz usunąć studenta?</h1>
                <div class="buttons-delete">
                <button @click="confirmDelete">Tak</button>
                <button @click="closeDeleteModal">Nie</button>
                </div>
            </div>
        </div>
        <!-- /Modal for Delete Confirmation --> 
        <footer>
        <div>
            <button @click="goToHomePage"><img src="~assets/home_page_logo.png" alt=""></button>
            <nuxt-link to="/home"><p>Strona Główna</p></nuxt-link>
        </div>
        <div>
            <button @click="openDeleteModal"><img src="~assets/remove_logo.png" alt=""></button>
            <p>Usuń studenta</p>
        </div>
        </footer>
        </div>
    </template>

<style scoped>
        .studentEdit_content{
            background: linear-gradient(180deg, rgba(250, 250, 250, 0.40) 0%, #8DC3F4 56.25%);
            min-height: 100vh;
            display: flex;
            flex-direction: column;
        }

        .studentEdit_main {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-grow: 1;
        }

        .studentInfoEdit {
            border-radius: 20px;
            background: #9EC0E0;
            width: 50%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: 2%;
            margin-bottom: 5%;
        }

        .studentInfoEdit :nth-child(2){
            margin-top: 2%;
        }

        .infoBox {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            width: 50%;
            border-radius: 20px;
            background: #E7EBEF;
            padding: 1%;
            color: #0068C8;
            text-align: center;
            font-size: 20px;
            line-height: normal;
            margin-bottom: 2%;
            padding: 0% 3% 0% 3%;
        }

        .infoBox img {
            margin-top: 10px;
            margin-bottom: 10px;
        }

        .infoBoxModal{
            min-height: 5%;
            width: 60%;
            padding: 1%;
        }
        

        .submitButton{
            min-height: 10%;
        }


        a{
            text-decoration: none;
            color:#0068C8;
        }

        button{
            border: none;
            background: none;
        }
        footer {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            width: 100%;
            background-color: white;
            padding: 1%;
            color: #0068C8;
        }

        footer div{
            display: flex;
            width: auto;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-left: 2%;
            margin-right: 2%;
        }

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
        }

        .modal-content {
        background-color: #fefefe;
        margin: 5% auto;
        padding: 20px;
        border: 1px solid #888;
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center ;
        height: fit-content;
        position: relative;
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


        .modal-delete {
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
        }

        .modal-delete-content {
        background-color: #fefefe;
        margin: 5% auto;
        padding: 20px;
        border: 1px solid #888;
        display: flex;
        width: 80%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #0068C8;
        min-height: 20vh;
        text-align: center;
        }

        .buttons-delete{
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            width: 80%;
            margin-top: 10%;
        }

        .buttons-delete button{
            border-radius: 20px;
            background: #9EC0E0;
            color: #2387E4;
            width: 164px;
            height: 46px;
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
        }

        .submitButton{
            border-radius: 20px;
            background: #9EC0E0;
            color: #2387E4;
            width: 164px;
            height: 46px;
        }

        .close:hover,
        .close:focus {
            color: black;
            text-decoration: none;
            cursor: pointer;
        }

        @media (min-width: 990px) and (max-width: 1400px) { 
            .infoBox{
                width: 70%;
                font-size: 18px;
                padding: 2%;
            }
            .infoBoxModal{
                min-height: 2%;
            }

            .submitButton{
                min-height: 8%;
            }
        }
        @media (min-width: 576px) and (max-width: 990px){ 
            .studentInfoEdit{
                width: 70%;
            }
            .infoBox {
                width: 80%;
                font-size: 18px;
            }
            .infoBox:last-child {
                margin-bottom: 20px;
            }

            footer p{
                font-size: 15px;
            }
            footer img{
                width: 50px;
            }

            .infoBoxModal{
                min-height: 15%;
            }

            .infoBoxModal input{
                width: 40%;
            }

            .submitButton{
                min-height: 10%;
            }
            .modal-delete-content{
                height: 80%;
            }

            .modal-delete-content h1{
                font-size: 25px;
            }

            .buttons-delete button{
                width: 120px;
            }


        }
        
        @media (max-width: 576px) { 

            header img{
                width: 50px;
            }
            .studentInfoEdit{
                width: 80%;
            }
            .infoBox {
                width: 80%;
                font-size: 13px;
                padding: 0% 3% 0% 3%;
            }
            footer p{
                font-size: 12px;
            }
            footer img{
                width: 40px;
            }

            .infoBoxModal{
                width: 90%;
                padding: 2%;
                min-height: 12%;
            }

            .infoBoxModal input{
                width: 40%;
            }

            .submitButton {
                margin-top: 20px;
                width: 50%;
            }

            .modal-delete-content{
                height: 70%;
            }

            .modal-delete-content h1{
                font-size: 20px;
            }

            .buttons-delete button{
                width: 90px;
                height: 36px;
            }

        }
</style>