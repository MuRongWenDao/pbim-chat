$(function () {
    $('.contact_list').optiscroll();
    $(".list_wrapper").optiscroll();
    $(".msg_list").optiscroll("bottom", 'auto');
    //联系人搜索框的宽度变化
    $(".contact_sk").focus(function () {
        $(".contact_sk").stop(true, false).animate({width: "219px"}, 300);

    })
    $(".contact_sk").blur(function () {
        $(".contact_sk").stop(true, false).animate({width: "189px"}, 300);
    })

    //联系人，选中当前子项状态
    $(".user_list>ul>li").click(function () {
        // $(".user_list>ul>li").removeClass("active")
        clear_active()
        $(this).addClass("active")
    })

})

function clear_active() {
    $(".sub_project_list>ul>li").removeClass("active");
    $(".sub_project_list>ul>li>.group_area").removeClass("active");
    $(".project_area").removeClass("active");
    $(".discussion_group_list>ul>li").removeClass("active");
    $(".member_list>ul>li").removeClass("active");
    $(".discussion_group>.contact_title").removeClass("active");
    $(".user_list>ul>li").removeClass("active");

}

//工作群组 展开/收起
function work_group_toggle(event) {
    var target = $(event.target);
    if (target.is("i")) {
        //展开工作群组
        var sub_list = target.closest("li").find(".sub_project_list").eq(0);
        var caret = target.closest(".fa_caret").eq(0);
        if (caret.hasClass("active")) {
            //收起
            caret.removeClass("active");
            sub_list.stop(true, false).slideUp()
        }
        else {
            //展开
            caret.addClass("active")
            sub_list.stop(true, false).slideDown()
        }

    }
    else {
        if (target.closest(".project_area").is(".project_area")) {
            clear_active();
            target.closest(".project_area").addClass("active");
        }

    }
}


function member_list_toggle(This) {

    clear_active();
    $(This).closest(".sub_project_list").prevUntil("project_area").addClass("active");

    var caret = $(This).find("i.fa").eq(0);
    var sub_list = $(This).parent("li").find(".member_list").eq(0);

    if (caret.hasClass("active")) {
        //收起
        caret.removeClass("active");
        caret.removeClass("fa-minus").addClass("fa-plus");
        sub_list.stop(true, false).slideUp()
    }
    else {
        //展开
        caret.addClass("active");
        caret.removeClass("fa-plus").addClass("fa-minus");
        sub_list.stop(true, false).slideDown();
    }
}

//群讨论组,联系人的 展开/收起
function menu_toggle(This) {
    clear_active();

    var caret = $(This).find(".fa_caret").eq(0);
    var sub_list = $(This).closest(".is_parent").find(".sub_list").eq(0);
    $(This).addClass("active");

    if (caret.hasClass("active")) {
        //收起
        caret.removeClass("active");
        sub_list.stop(true, false).slideUp()
    }
    else {
        //展开
        caret.addClass("active");
        sub_list.stop(true, false).slideDown();
    }
}

//选中联系人发送消息
function jump_chat_box(This) {
    clear_active();
    $(This).addClass("active");
}

//选中通讯录查看资料
function jump_profile(This) {
    clear_active()
    $(This).addClass("active");
    member_data.length = 0;
    var temp_data;
    if (false) {
        //如果是登录后首次进入，显示空白
        // 条件需改写
    } else {
        if ($(This).parent().parent().hasClass("member_list")) {
            //如果是好友，只有一人
            temp_data = {contact_flag: 1, group_name: "", member_name: "杨崇元"};
        } else {
            //如果是讨论组，有多人
            temp_data = {
                contact_flag: 2,
                group_name: "讨论组",
                member_data: [{member_name: '杨崇元1'}, {member_name: '杨崇元2'}, {member_name: '杨崇元3'}, {member_name: '杨崇元4'}]
            };

        }
    }
    member_data.push(temp_data);
    console.log(member_data)
    profile_model.member_list(member_data);
}
