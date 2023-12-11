
<script setup>
    const { students }  = useStudents();
    const formData = ref({});
    const isModalOpen = ref(false);

    function editStudent(student) {
    localStorage.setItem('selectedStudent', JSON.stringify(student));
    navigateTo('/studentEdit');
    }

    function goToStudentRead(student){
        localStorage.setItem('selectedStudent', JSON.stringify(student));
        navigateTo('/studentRead');
    }

    function readStudent(student) {
    localStorage.setItem('selectedStudent', JSON.stringify(student));
    navigateTo('/studentRead');
    }
    //modal
    onMounted(() => {
    isModalOpen.value = true;
    });

    function openModal() {
        isModalOpen.value = true;
        const modal = document.getElementById('modal');
        modal.style.display = 'flex';
    }
</script>

<template>
    <div class="home_content">
    <main>
        <section class="student" v-for="student in students" :key="student['Numer Albumu']">
        <button @click="goToStudentRead(student)" class="buttonGoToStudentRead"><img src="~assets/student_logo.png" alt="" class="studentLogo"></button>
        <div class="studentInfo">
            <p>Nr albumu: {{ student['Numer Albumu'] }}</p>
            <p>Imię Nazwisko: {{ student['Imie Nazwisko'] }}</p>
            <p>Kierunek: {{ student.kierunek }}</p>
            <p>Semestr: {{ student.semester }}</p>
        </div>
        <div>
            <button @click="editStudent(student)"><img src="~assets/edit_logo.png" alt=""></button>
            <button @click="readStudent(student)"><img src="~assets/more_logo.png" alt=""></button>
        </div>
        </section>
    </main>
    <!-- Modal -->
    <addStudent v-if="isModalOpen" />
    <!-- /Modal -->
    <footer>
        <button @click="openModal"><img src="~assets/add_logo.png" alt=""></button>
        <p>Dodaj studenta</p>
    </footer>
    </div>
</template>

<style scoped>
    .home_content {
        background: linear-gradient(180deg, rgba(250, 250, 250, 0.40) 0%, #8DC3F4 56.25%);
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }
    main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        flex-grow: 1;
    }

    .student {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 75%;
        border-radius: 20px;
        background: #9EC0E0;
        padding: 2%;
        color: #0068C8;
        margin-top: 2%;
        margin-bottom: 2%;
    }

    .studentInfo{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width: 80%;
    }

    .studentLogo {
        width: 85px;
        height: 85px;
    }

    .buttonGoToStudentRead{
        background: none;
        border: none;
    }

    button{
        background: none;
        border: none;
        cursor: pointer;
    }

    footer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        background-color: white;
        padding: 1%;
        color: #0068C8;
    }

    @media (min-width: 990px) and (max-width: 1400px){
        .student{
            width: 90%;
            font-size: 16px;
        }
    }

    @media (max-width: 990px) { 

        .studentInfo{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
        }
        .studentInfo :nth-child(4){
            display: none;
        }
        .student{
            margin-bottom: 10%;
        }
    }

    @media (max-width: 576px) {
        .student{
            font-size: 12px;
            width: 90%;
        }

        footer p{
            font-size: 12px;
        }

        footer img{
            width: 40px;
        }
    }


</style>




