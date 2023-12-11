
<script setup>
    const { students,removeStudent }  = useStudents();

    const selectedStudent = ref(JSON.parse(localStorage.getItem('selectedStudent')));

    const isDeleteModalOpen = ref(false);

onMounted(() => {
    selectedStudent.value = JSON.parse(localStorage.getItem('selectedStudent'));
    isDeleteModalOpen.value = true;
});

function openDeleteModal() {
    isDeleteModalOpen.value = true;
    const modalDelete = document.getElementById('deleteModal');
    modalDelete.style.display = 'flex';
}

function closeDeleteModal() {
    const modalDelete = document.getElementById('deleteModal');
    modalDelete.style.display = 'none';
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

// function removeCurrentStudent() {
//     if (selectedStudent.value) {
//         const studentIndex = students.value.findIndex(student => student['Numer Albumu'] === selectedStudent.value['Numer Albumu']);

//         if (studentIndex !== -1) {
//             removeStudent(studentIndex);
//             goToHomePage();
//         }
//     }
// }
</script>

<template>
    <div class="studentRead_content">
    <main class="studentRead_main">
        <section class="studentInfoRead" v-if="selectedStudent">
        <img src="~assets/student_logo.png" alt="">
        <div class="infoBox" v-for="(value, key) in selectedStudent" :key="key">
            <p>{{ key }}: {{ value }}</p>
        </div>
        </section>
    </main>
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
.studentRead_content{
        background: linear-gradient(180deg, rgba(250, 250, 250, 0.40) 0%, #8DC3F4 56.25%);
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }

        .studentRead_main {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-grow: 1;
        }

        .studentInfoRead {
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

        .studentInfoRead :nth-child(2){
            margin-top: 2%;
        }

        .infoBox {
            display: flex;
            flex-direction: column;
            justify-content: center;
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
        }

        .infoBox:last-child {
                margin-bottom: 30px;
        }

        .infoBox img {
            margin-top: 10px;
            margin-bottom: 10px;
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

        @media (min-width: 990px) and (max-width: 1400px) { 
            .infoBox{
                width: 55%;
                font-size: 16px;
            }
        }
        @media (min-width: 576px) and (max-width: 990px) { 
            .studentInfoRead{
                width: 65%;
            }
            .infoBox {
                width: 80%;
                font-size: 18px;
                padding: 0% 3% 0% 3%;
                min-height: 50px;
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

            .studentInfoRead{
                width: 65%;
            }
            .infoBox {
                width: 80%;
                font-size: 11px;
                padding: 0% 3% 0% 3%;
                min-height: 40px;
            }
            .infoBox:last-child {
                margin-bottom: 20px;
            }

            footer p{
                font-size: 12px; 
            }
            footer img{
                width: 40px;
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