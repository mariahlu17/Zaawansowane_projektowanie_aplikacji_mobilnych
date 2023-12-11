<script setup>
const students = useStudents();
</script>

<template>
    <section class="student" v-for="student in students" :key="student.albumNumber">
    <img src="~assets/student_logo.png" alt="" class="studentLogo">
    <div class="studentInfo">
        <p>Nr albumu: {{ student.albumNumber }}</p>
        <p>Imię Nazwisko: {{ student.name }}</p>
        <p>Kierunek: {{ student.major }}</p>
        <p>Semestr: {{ student.semester }}</p>
    </div>
    <div>
        <nuxt-link to="/studentEdit"><img src="~assets/edit_logo.png" alt=""></nuxt-link>
        <nuxt-link to="/studentRead"><img src="~assets/more_logo.png" alt=""></nuxt-link>
    </div>
    </section>
</template>

<style scoped>
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

@media (max-width: 768px) { 
    .studentInfo{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .studentInfo :nth-child(4){
        display: none;
    }
    .student{
        margin-bottom: 10%;
    }
}

</style>
