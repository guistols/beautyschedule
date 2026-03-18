import { Servico } from "@/app/mock/servico";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";



export default function EditarServico(){
    const params = useParams();
    const router = useRouter();

    const codigo = Number(params.codigo)
    const [servicos,setServicos] = useState<Servico|null>(null)
}