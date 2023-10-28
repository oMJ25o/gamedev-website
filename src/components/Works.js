import MobRevengePic from "./images/mob-revenge-title.png";
import LeafGuardianPic from "./images/leaf-guardian-legacy-title.png";
import IronmouseQuestPic from "./images/ironmouse-quest-title.png";

function Works() {
    return (
        <div>
            <div className="container-works">
                <img src={MobRevengePic} className="WorksPic" id="MobRevengePic" alt="Title Pic of Mob Revenge"/>
                <p className="GameDesc ml-2">Aliquip non deserunt irure sit reprehenderit ut esse ullamco quis. Incididunt laboris ex ipsum ipsum pariatur amet deserunt id incididunt ex exercitation sit commodo Lorem. Velit consequat consectetur voluptate officia fugiat mollit veniam sint id officia. Magna cupidatat dolor ex duis eu. Enim elit dolor eu elit aute officia quis veniam dolore irure.</p>
            </div>
            <div className="container-works">
                <p className="GameDesc ml-2">Aliquip non deserunt irure sit reprehenderit ut esse ullamco quis. Incididunt laboris ex ipsum ipsum pariatur amet deserunt id incididunt ex exercitation sit commodo Lorem. Velit consequat consectetur voluptate officia fugiat mollit veniam sint id officia. Magna cupidatat dolor ex duis eu. Enim elit dolor eu elit aute officia quis veniam dolore irure.</p>
                <img src={LeafGuardianPic} className="WorksPic" id="LeafGuardianPic" alt="Title Pic of Mob Revenge"/>
            </div>
            <div className="container-works">
                <img src={IronmouseQuestPic} className="WorksPic" id="IronmouseQuestPic" alt="Title Pic of Mob Revenge"/>
                <p className="GameDesc ml-2">Aliquip non deserunt irure sit reprehenderit ut esse ullamco quis. Incididunt laboris ex ipsum ipsum pariatur amet deserunt id incididunt ex exercitation sit commodo Lorem. Velit consequat consectetur voluptate officia fugiat mollit veniam sint id officia. Magna cupidatat dolor ex duis eu. Enim elit dolor eu elit aute officia quis veniam dolore irure.</p>
            </div>
            <div className="mt-5">

            </div>
        </div>
    )
}

export default Works;