$(document).ready(function()
{
    $('#btn').on('click',function(e)
    {
        e.preventDefault()
        // $('p').hide(1000) // - this is to hide whatever selected when you click hide

       
        $('#para1').css({'color':'white', 'background':'grey','border':'solid black'})
        $(':submit').css('color','blue')
    })

    $('input').focus(function() 
    {
        $(this.css({ 'background': 'blue', 'color': 'white'  }) )
    })

    $('input').blur(function () {
        $(this).css({ 'background': 'grey', 'color': 'white' }) }
    )
            
        /// $('.para2').addClass('para');
                //this means you are taking the current class name of para2 and updating it
                //to para without having to go back to the html

        /// $('para1').removeClass('myclass');
                //Here whatever class name is existing then we can remove it and place it
                //with my class.

        
//e.preventDefault();
    $('#para1').append('I am in the last of all!!!');
    $('#para1').prepend('I am in the biginning');


//'this is your button id'
// $('#fadeOut').on("click",function()
// {
//     $('.box').fadeOut(2000);
// }
// )

    // $('#mleft').click(function(){
        //     $('.box').animate(
        //         {
        //             left:0,
        //             height:'100px',
        //             width:'100px',
        //             opacity:'1' }, 2000)
        // }
        // )
        // // gaming
        // $('#fadeOut').on("click",function()
        // {
        //     $('.gaming').fadeOut(2000);
        // }
        // )

                $('#fadeIn').on("click",function()
                {
                    $('.box').fadeToggle(2000);
                }
                )


                $('#mright').click(function(){
                    $('.box').animate(
                        {
                            left:'200px',
                            height:'100px',
                            width:'100px',
                            opacity:'1' }, 2000)
        }
        )

    ////GAMING BOX
            $('#fadeIn').on("click",function()
            {
                $('.gaming').fadeToggle(2000);
            }
            )


            $('#mright').click(function(){
                        $('.gaming').animate(
                            {
                                left:'400px',
                                height:'100px',
                                width:'100px',
                                opacity:'1' }, 2000)
            }
            )

   ///FILMING BOX// 

                $('#fadeIn').on("click",function()
                {
                    $('.film').fadeToggle(2000);
                }
                )


                //we are now creating an animation where when you click 
                //move right button the box will move to the right

                $('#mright').click(function(){
                            $('.film').animate(
                                {
                                    left:'600px',
                                    height:'100px',
                                    width:'100px',
                                    opacity:'1' }, 2000)
                }
                )


///    ///AUDIO BOX

                $('#fadeIn').on("click",function()
                {
                    $('.audio').fadeToggle(2000);
                }
                )

                $('#mright').click(function(){
                            $('.audio').animate(
                                {
                                    left:'800px',
                                    height:'100px',
                                    width:'100px',
                                    opacity:'1' }, 2000)
                }
                )

//

// $('#mleft').click(function(){
//     $('.gaming').animate(
//         {
//             left:0,
//             height:'100px',
//             width:'100px',
//             opacity:'1' }, 2000)
// }
// )

})